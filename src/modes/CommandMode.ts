import * as vscode from "vscode";
import * as subjects from "../subjects/subjects";
import InsertMode from "./InsertMode";
import ExtendMode from "./ExtendMode";
import * as modes from "./modes";
import * as editor from "../utils/editor";
import * as selections from "../utils/selectionsAndRanges";
import * as common from "../common";
import SubjectBase from "../subjects/SubjectBase";
import { SubjectAction } from "../subjects/SubjectActions";
import JumpInterface from "../handlers/JumpInterface";
import { SubjectName } from "../subjects/SubjectName";
import { seq } from "../utils/seq";
import { setSelectionBackground, getCommandColor, getWordDefinitionIndex } from "../config";
let outputchannel = vscode.window.createOutputChannel("CommandMode");


export default class CommandMode extends modes.EditorMode {

    readonly cursorStyle = vscode.TextEditorCursorStyle.LineThin;
    readonly lineNumberStyle = vscode.TextEditorLineNumbersStyle.Relative;
    readonly name = "COMMAND";

    readonly decorationType: vscode.TextEditorDecorationType;
    readonly decorationTypeTop: vscode.TextEditorDecorationType;
    readonly decorationTypeMid: vscode.TextEditorDecorationType;
    readonly decorationTypeBottom: vscode.TextEditorDecorationType;

    get statusBarText(): string {
        const lastSkip = common.getLastSkip();
        const skipString =
            lastSkip?.kind === "SkipTo"
                ? ` | Skip: ${lastSkip.char}`
                : lastSkip?.kind === "SkipOver"
                ? ` | Skip over: ${lastSkip.char || "¶"}`
                : ``;

        return `Command mode (${this.subject.displayName})${skipString}`;
    }

    constructor(
        private readonly context: common.ExtensionContext,
        public readonly subject: SubjectBase
    ) {
        
        vscode.commands.executeCommand(
            "setContext",
            "codeFlea.subject",
            subject.name
        );
        super();

        common.setVirtualColumn(this.context.editor.selection);
        
        this.decorationType = vscode.window.createTextEditorDecorationType({
            dark: {
                borderStyle: "solid",
                borderColor: subject.outlineColour.dark,
                borderWidth: "1.2px",
            },
            light: {
                borderStyle: "solid",
                borderColor: subject.outlineColour.light,
                borderWidth: "1.2px",
            },
        });

        this.decorationTypeTop = vscode.window.createTextEditorDecorationType({
            dark: {
                borderStyle: "solid none none solid",
                borderColor: subject.outlineColour.dark,
                borderWidth: "1.2px",
            },
            light: {
                borderStyle: "solid none none solid",
                borderColor: subject.outlineColour.light,
                borderWidth: "1.2px",
            },
        });

        this.decorationTypeMid = vscode.window.createTextEditorDecorationType({
            dark: {
                borderStyle: "none none none solid",
                borderColor: subject.outlineColour.dark,
                borderWidth: "1.2px",
            },
            light: {
                borderStyle: "none none none solid",
                borderColor: subject.outlineColour.light,
                borderWidth: "1.2px",
            },
        });

        this.decorationTypeBottom =
            vscode.window.createTextEditorDecorationType({
                dark: {
                    borderStyle: "none none solid solid",
                    borderColor: subject.outlineColour.dark,
                    borderWidth: "1.2px",
                },
                light: {
                    borderStyle: "none none solid solid",
                    borderColor: subject.outlineColour.light,
                    borderWidth: "1.2px",
                },
            });
    }

    equals(previousMode: modes.EditorMode): boolean {
        return (
            previousMode instanceof CommandMode &&
            previousMode.subject.equals(this.subject)
        );
    }

    with(
        args: Partial<{
            context: common.ExtensionContext;
            subject: SubjectBase;
        }>
    ) {
        return new CommandMode(
            args.context ?? this.context,
            args.subject ?? this.subject
        );
    }

    async changeTo(
        newMode: modes.EditorModeChangeRequest
    ): Promise<modes.EditorMode> {
        
        switch (newMode.kind) {
            case "INSERT":
                return new InsertMode(this.context, this);

            case "EXTEND":
                return new ExtendMode(this.context, this);

            case "COMMAND":
                if (editor) {
                    const collapsePos = newMode.half === "RIGHT" ? "end" : "start";
                    selections.collapseSelections(this.context.editor, collapsePos);
                }

                if (!newMode.subjectName) {
                    return this;
                }

                if (newMode.subjectName !== this.subject.name) {
                    return this.with({
                        subject: subjects.createFrom(
                            this.context,
                            newMode.subjectName
                        ),
                    });
                }

                // This handles the "cyclable" subjects, e.g. "WORD" -> "INTERWORD" -> "WORD" etc
                switch (newMode.subjectName) {
                    case "WORD":
                        return this.with({
                            subject: subjects.createFrom(
                                this.context,
                                "WORD",
                            ),
                        });
                    case "INTERWORD":
                        return this.with({
                            subject: subjects.createFrom(this.context, "WORD"),
                        });
                    case "BRACKETS":
                        return this.with({
                            subject: subjects.createFrom(
                                this.context,
                                "BRACKETS_INCLUSIVE"
                            ),
                        });
                    case "BRACKETS_INCLUSIVE":
                        return this.with({
                            subject: subjects.createFrom(
                                this.context,
                                "BRACKETS"
                            ),
                        });
                }

                return this;
        }
    }

    async executeSubjectCommand(command: SubjectAction): Promise<void> {
        await this.subject[command]();
    }

    async fixSelection(half? : "LEFT" | "RIGHT") {
        await this.subject.fixSelection(half);
    }

    async skip(direction: common.Direction): Promise<void> {
        const skipChar = await editor.inputBoxChar(
            `Skip ${direction} to a ${this.subject.name} by its first character`
        );

        if (skipChar === undefined) {
            return;
        }

        if (skipChar > 'A' && skipChar < 'Z') {
            direction = common.reverseDirection(direction);
        }

        common.setLastSkip({kind: "SkipTo", char: skipChar, subject: this.subject.name, direction: direction});

        await this.subject.skip(direction, {kind: "SkipTo", char: skipChar, subject: this.subject.name, direction: direction});
    }

    async skipOver(direction: common.Direction): Promise<void> {
        const skipChar = await editor.inputBoxChar(
            `Skip ${direction} over the given character to the next ${this.subject.name}`,
            true
        );
        if (skipChar === undefined) {
            return;
        }

        common.setLastSkip({kind: "SkipTo", char: skipChar, subject: this.subject.name, direction: direction});

        await this.subject.skip(direction, {kind: "SkipTo", char: skipChar, subject: this.subject.name, direction: direction});
    }

    async repeatLastSkip(direction: common.Direction): Promise<void> {
        const lastSkip = common.getLastSkip();
        if (!lastSkip) {
            return;
        }
        if (this.subject.name !== lastSkip.subject) {
            await vscode.commands.executeCommand(`codeFlea.changeTo${lastSkip.subject.charAt(0).toUpperCase() + lastSkip.subject.slice(1).toLowerCase()}Subject`);
        }

        let lastDirection = lastSkip.direction;
        if (direction === "backwards") {
            lastDirection = common.reverseDirection(lastDirection);
        }

        await this.subject.skip(lastDirection, lastSkip);
    }

    
    async jump(): Promise<void> {
        const combinedRange = this.context.editor.visibleRanges.reduce((acc, range) => acc.union(range));
        const jumpLocations = this.subject
            .iterAll(common.IterationDirection.alternate, combinedRange)
            .map((range) => range.start)
            .toArray();
            
        const jumpInterface = new JumpInterface(this.context);

        let jumpType = this.subject.jumpPhaseType;
        if (this.subject.name === "WORD") {
            let wordDefinitionIndex = getWordDefinitionIndex();
            if (wordDefinitionIndex <= 1) {
                jumpType = "dual-phase";
            } else {
                jumpType = "single-phase";
            }
        }
    
        const jumpPosition = await jumpInterface.jump({
            kind: jumpType,
            locations: seq(jumpLocations),
        });
    
        if (jumpPosition) {
            this.context.editor.selection = selections.positionToSelection(jumpPosition);
            
            await this.fixSelection();
            await vscode.commands.executeCommand('revealLine', {lineNumber: this.context.editor.selection.active.line, at: 'center'});
        }
    }

    async jumpToSubject(subjectName: SubjectName) {
        const tempSubject = subjects.createFrom(this.context, subjectName);
        const combinedRange = this.context.editor.visibleRanges.reduce((acc, range) => acc.union(range));
        const jumpLocations = tempSubject
            .iterAll(common.IterationDirection.alternate, combinedRange)
            .map((range) => range.start)
            .toArray();

        const jumpInterface = new JumpInterface(this.context);

        let jumpType = tempSubject.jumpPhaseType;

        if (tempSubject.name === "WORD") {
            let wordDefinitionIndex = getWordDefinitionIndex();
            if (wordDefinitionIndex <= 1) {
                jumpType = "dual-phase";
            } else {
                jumpType = "single-phase";
            }
        }

        const jumpPosition = await jumpInterface.jump({
            kind: jumpType,
            locations: seq(jumpLocations),
        });

        if (jumpPosition) {
            this.context.editor.selection =
                selections.positionToSelection(jumpPosition);

            // outputchannel.appendLine(`jumpToSubject: ${subjectName}`);
            return await this.changeTo({ kind: "COMMAND", subjectName });
        }
    }
    
    async pullSubject(subjectName: SubjectName) {
        const tempSubject = subjects.createFrom(this.context, subjectName);
        const combinedRange = this.context.editor.visibleRanges.reduce((acc, range) => acc.union(range));
        const jumpLocations = tempSubject
            .iterAll(common.IterationDirection.alternate, combinedRange)
            .map((range) => range.start)
            .toArray();

        const jumpInterface = new JumpInterface(this.context);

        let jumpType = tempSubject.jumpPhaseType;

        if (tempSubject.name === "WORD") {
            let wordDefinitionIndex = getWordDefinitionIndex();
            if (wordDefinitionIndex <= 1) {
                jumpType = "dual-phase";
            } else {
                jumpType = "single-phase";
            }
        }

        const jumpPosition = await jumpInterface.jump({
            kind: jumpType,
            locations: seq(jumpLocations),
        });

        if (jumpPosition) {
            const currentSelection = this.context.editor.selection;
            const pulledRange = await tempSubject.pullSubject(
                this.context.editor.document,
                jumpPosition,
                currentSelection
            );

            if (pulledRange) {
                this.context.editor.selection = new vscode.Selection(pulledRange.start, pulledRange.end);
                await this.fixSelection();
            }
        }

        return undefined;
    }

    getSubjectName(): SubjectName {
        return this.subject.name;
    }

    async zoomJump(): Promise<vscode.Position | undefined> {
        const combinedRange = this.context.editor.visibleRanges.reduce((acc, range) => acc.union(range));
        const jumpLocations = this.subject
        .iterAll(common.IterationDirection.alternate, combinedRange)
        .counted()
        .filter(([_, index]) => index % 3 === 0) // Select every 3rd line
        .map(([range, _]) => range.start)
        .toArray();
        // outputchannel.appendLine(`zoomJump: ${jumpLocations.length} locations found`);
            
        const jumpInterface = new JumpInterface(this.context);
    
        const jumpPosition = await jumpInterface.zoomJump({
            locations: seq(jumpLocations),
        });
    
        if (jumpPosition) {
            this.context.editor.selection = selections.positionToSelection(jumpPosition);
            await this.fixSelection();
        }
    
        return jumpPosition;
    }


}