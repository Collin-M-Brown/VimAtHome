import { createFrom } from "../subjects/subjects";
import InsertMode from "./InsertMode";
import ExtendMode from "./ExtendMode";
import * as common from "../common";
import { EditorMode, EditorModeChangeRequest } from "./modes";
import CommandMode from "./CommandMode";
import * as modes from "./modes";

export default class NullMode extends EditorMode {
    readonly decorationType = undefined;
    readonly decorationTypeTop = undefined;
    readonly decorationTypeMid = undefined;
    readonly decorationTypeBottom = undefined;
    readonly cursorStyle = undefined;
    readonly lineNumberStyle = undefined;
    readonly name = "NULL";
    readonly statusBarText = "Initialising...";

    constructor(private readonly context: common.ExtensionContext) {
        super();
    }

    equals(previousMode: EditorMode): boolean {
        return previousMode instanceof NullMode;
    }

    async changeTo(newMode: EditorModeChangeRequest): Promise<EditorMode> {
        const defaultSubject = createFrom(this.context, "WORD");
        const navigateMode = new CommandMode(this.context, defaultSubject);

        switch (newMode.kind) {
            case "INSERT":
                return new InsertMode(this.context, navigateMode);

            case "EXTEND":
                return new ExtendMode(this.context, navigateMode);

            case "COMMAND":
                return navigateMode;
        }
    }

    async executeSubjectCommand() {}
    async skip() {}
    async skipOver() {}
    async repeatLastSkip() {}
    async jump() {}
    async jumpToSubject() { return undefined; }
    async pullSubject() { return undefined; }
    getSubjectName() { return undefined; }
    async zoomJump() { return undefined; }
    async collapseToCenter(): Promise<modes.EditorModeChangeRequest | undefined> { return undefined; }
    async collapseToLeft(): Promise<modes.EditorModeChangeRequest | undefined> { return undefined; };
    async collapseToRight(): Promise<modes.EditorModeChangeRequest | undefined> { return undefined; };
}
