import * as vscode from "vscode";
import { scrollToCursorAtCenter } from "./editor";
import * as common from "../common";

export function char(ch: string): common.Char {
    return ch as common.Char;
}

export type QuickCommand = {
    quickKey: common.Char;
    label: string;
    execute: () => Promise<void>;
};

export const ModifyCommands: QuickCommand[] = [
    {
        quickKey: char("q"),
        label: "Quick fix",
        async execute() {
            await vscode.commands.executeCommand(
                "editor.action.quickFix"
            );
        },
    },
    {
        quickKey: char("k"),
        label: "Convert to k and r",
        async execute() {
            await vscode.commands.executeCommand(
                "vimAtHome.convertToKandR"
            );
        },
    },
    {
        quickKey: char("h"),
        label: "Manage highlights",
        async execute() {
            await vscode.commands.executeCommand(
                "vimAtHome.manageHighlights"
            );
        },
    },
    // {
    //     quickKey: char("k"),
    //     label: "Transform to kebab case",
    //     async execute() {
    //         await vscode.commands.executeCommand(
    //             "editor.action.transformToKebabcase"
    //         );
    //     },
    // },
    {
        quickKey: char("l"),
        label: "Transform to lower case",
        async execute() {
            await vscode.commands.executeCommand(
                "editor.action.transformToLowercase"
            );
        },
    },
    {
        quickKey: char("c"),
        label: "toggleCopilot",
        async execute() {
            await vscode.commands.executeCommand(
                "github.copilot.toggleCopilot"
            );
        },
    },
    {
        quickKey: char("t"),
        label: "Transform to title case",
        async execute() {
            await vscode.commands.executeCommand(
                "editor.action.transformToTitlecase"
            );
        },
    },
    {
        quickKey: char("u"),
        label: "Transform to upper case",
        async execute() {
            await vscode.commands.executeCommand(
                "editor.action.transformToUppercase"
            );
        },
    },
    {
        quickKey: char("p"),
        label: "Transform to Pascal case",
        async execute() {
            await vscode.commands.executeCommand(
                "editor.action.transformToPascalcase"
            );
        },
    },
    {
        quickKey: char("f"),
        label: "Flip case of first character",
        async execute() {
            await vscode.commands.executeCommand(
                "vimAtHome.flipCaseFirstCharacter"
            );
        },
    },
    {
        quickKey: char("a"),
        label: "Sort lines in selection",
        async execute() {
            await vscode.commands.executeCommand(
                "editor.action.sortLinesAscending"
            );
        },
    },
    {
        quickKey: char("A"),
        label: "Sort lines in selection selection (descending)",
        async execute() {
            await vscode.commands.executeCommand(
                "editor.action.sortLinesDescending"
            );
        },
    },
    {
        quickKey: char("s"),
        label: "split by char",
        async execute() {
            await vscode.commands.executeCommand(
                "vimAtHome.splitBy"
            );
        },
    },
    {
        quickKey: char("r"),
        label: "Replace with Terminal Output",
        async execute() {
            await vscode.commands.executeCommand(
                "vimAtHome.replaceSelectionWithTerminalOutput"
            );
        },
    },
    {
        quickKey: char("b"),
        label: "Surround Selection Brackets",
        async execute() {
            await vscode.commands.executeCommand(
                "vimAtHome.bracketize"
            );
        },
    },
    {
        quickKey: char("x"),
        label: "Calculate and replace",
        async execute() {
            await vscode.commands.executeCommand(
                "vimAtHome.calc"
            );
        },
    },
    {
        quickKey: char("i"),
        label: "split on selection",
        async execute() {
            await vscode.commands.executeCommand(
                "vimAtHome.splitOnSelection"
            );
        },
    },
    {
        quickKey: char("j"),
        label: "join lines",
        async execute() {
            await vscode.commands.executeCommand(
                "vimAtHome.join"
            );
        },
    },
    {
        quickKey: char("o"),
        label: "find highlight blocks",
        async execute() {
            await vscode.commands.executeCommand(
                "vimAtHome.findAllHighlights"
            );
        },
    },

];

export const GoToCommands: QuickCommand[] = [
    {
        quickKey: char("c"),
        label: "Run Current Jupyter Cell",
        execute: async () => {
            await vscode.commands.executeCommand("jupyter.runcurrentcell");
        },
    },
    {
        quickKey: char("u"),
        label: "Top of file",
        execute: async () => {
            await vscode.commands.executeCommand("cursorTop");
        },
    },
    {
        quickKey: char("e"),
        label: "Bottom of file",
        execute: async () => {
            await vscode.commands.executeCommand("cursorBottom");
        },
    },
    {
        quickKey: char("t"),
        label: "Go to type definition",
        execute: async () => {
            await vscode.commands.executeCommand(
                "editor.action.goToTypeDefinition"
            );
        },
    },
    {
        quickKey: char("i"),
        label: "Go to implementation",
        execute: async () => {
            await vscode.commands.executeCommand(
                "editor.action.goToImplementation"
            );
        },
    },
    {
        quickKey: char("r"),
        label: "Find references",
        execute: async () => {
            await vscode.commands.executeCommand(
                "editor.action.goToReferences"
            );
        },
    },
    {
        quickKey: char("p"),
        label: "Go to file",
        execute: async () => {
            await vscode.commands.executeCommand("workbench.action.quickOpen");
        },
    },
    {
        quickKey: char("q"),
        label: "Go to last edit location",
        execute: async () => {
            await vscode.commands.executeCommand(
                "workbench.action.navigateToLastEditLocation"
            );
        },
    },
    {
        quickKey: char("b"),
        label: "Go to bracket",
        execute: async () => {
            await vscode.commands.executeCommand("editor.action.jumpToBracket");
        },
    },
    {
        quickKey: char("b"),
        label: "Go to bracket",
        execute: async () => {
            await vscode.commands.executeCommand("editor.action.jumpToBracket");
        },
    },
    {
        quickKey: char("f"),
        label: "Go to next folding range",
        execute: async () => {
            await vscode.commands.executeCommand("editor.gotoNextFold");
        },
    },
    {
        quickKey: char("F"),
        label: "Go to previous folding range",
        execute: async () => {
            await vscode.commands.executeCommand("editor.gotoPreviousFold");
        },
    },
    {
        quickKey: char("a"),
        label: "Go to parent fold",
        execute: async () => {
            await vscode.commands.executeCommand("editor.gotoParentFold");
        },
    },
    {
        quickKey: char("l"),
        label: "Go to next problem",
        execute: async () => {
            await vscode.commands.executeCommand("vimAtHome.changeToInsertMode");
            await vscode.commands.executeCommand("editor.action.marker.nextInFiles");
        },
    },
    {
        quickKey: char("j"),
        label: "Go to prev problem",
        execute: async () => {
            await vscode.commands.executeCommand("vimAtHome.changeToInsertMode");
            await vscode.commands.executeCommand("editor.action.marker.prevInFiles");
        },
    },
    {
        quickKey: char("o"),
        label: "Go to folder in terminal",
        execute: async () => {
            await vscode.commands.executeCommand("vimAtHome.openTerminalAtFilePath");
        },
    },
    {
        quickKey: char("m"),
        label: "Toggle comment on line",
        execute: async () => {
            await vscode.commands.executeCommand("vimAtHome.toggleCommentAtEndOfLine");
        },
    },
    {
        quickKey: char("d"),
        label: "Copy Error Diagnostics",
        execute: async () => {
            await vscode.commands.executeCommand("vimAtHome.copyDiagnostics");
        },
    },

];

export const ViewCommands: QuickCommand[] = [
    {
        quickKey: char("1"),
        label: "Single column editor layout",
        execute: async () => {
            await vscode.commands.executeCommand(
                "workbench.action.editorLayoutSingle"
            );
        },
    },
    {
        quickKey: char("2"),
        label: "Two columns editor layout",
        execute: async () => {
            await vscode.commands.executeCommand(
                "workbench.action.editorLayoutTwoColumns"
            );
        },
    },
    {
        quickKey: char("3"),
        label: "Three columns editor layout",
        execute: async () => {
            await vscode.commands.executeCommand(
                "workbench.action.editorLayoutThreeColumns"
            );
        },
    },
    {
        quickKey: char("j"),
        label: "Focus previous editor group",
        execute: async () => {
            await vscode.commands.executeCommand(
                "workbench.action.focusPreviousGroup"
            );
        },
    },
    {
        quickKey: char("l"),
        label: "Focus next editor group",
        execute: async () => {
            await vscode.commands.executeCommand(
                "workbench.action.focusNextGroup"
            );
        },
    },
    {
        quickKey: char("e"),
        label: "Focus editor group below",
        execute: async () => {
            await vscode.commands.executeCommand(
                "workbench.action.focusBelowGroup"
            );
        },
    },
    {
        quickKey: char("i"),
        label: "Focus editor group above",
        execute: async () => {
            await vscode.commands.executeCommand(
                "workbench.action.focusAboveGroup"
            );
        },
    },
    {
        quickKey: char("o"),
        label: "Move editor into next group",
        execute: async () => {
            await vscode.commands.executeCommand(
                "workbench.action.moveEditorToNextGroup"
            );
        },
    },
    {
        quickKey: char("u"),
        label: "Move editor into prev group",
        execute: async () => {
            await vscode.commands.executeCommand(
                "workbench.action.moveEditorToPreviousGroup"
            );
        },
    },
    {
        quickKey: char("t"),
        label: "Open terminal in editor tab",
        execute: async () => {
            await vscode.commands.executeCommand(
                "workbench.action.createTerminalEditor"
            );
        },
    },
    {
        quickKey: char("m"),
        label: "move editor left",
        execute: async () => {
            await vscode.commands.executeCommand(
                "workbench.action.moveEditorLeftInGroup"
            );
        },
    },
    {
        quickKey: char("k"),
        label: "Kill terminal in editor tab",
        execute: async () => {
            await vscode.commands.executeCommand(
                "workbench.action.closeActiveEditor"
            );
        },
    },
    {
        quickKey: char("f"),
        label: "Open file view",
        execute: async () => {
            await vscode.commands.executeCommand(
                "workbench.view.explorer"
            );
        },
    },
    {
        quickKey: char("g"),
        label: "Open git view",
        execute: async () => {
            await vscode.commands.executeCommand(
                "workbench.view.scm"
            );
        },
    },
    {
        quickKey: char("r"),
        label: "reload window",
        execute: async () => {
            await vscode.commands.executeCommand(
                "workbench.action.reloadWindow"
            );
        },
    },
    {
        quickKey: char("z"),
        label: "zen mode",
        execute: async () => {
            await vscode.commands.executeCommand(
                "workbench.action.toggleZenMode"
            );
        },
    },
    {
        quickKey: char("n"),
        label: "new file",
        execute: async () => {
            await vscode.commands.executeCommand(
                "workbench.action.files.newUntitledFile"
            );
        },
    },
];

export const SpaceCommands: QuickCommand[] = [
    {
        quickKey: char(" "),
        label: "Center editor",
        execute: async () => {
            if (vscode.window.activeTextEditor) {
                scrollToCursorAtCenter(vscode.window.activeTextEditor);
            }
        },
    },
    {
        quickKey: char("b"),
        label: "Open breadcrumbs",
        execute: async () => {
            await vscode.commands.executeCommand("breadcrumbs.focusAndSelect");
        },
    },
    {
        quickKey: char("f"),
        label: "Format document",
        execute: async () => {
            await vscode.commands.executeCommand(
                "editor.action.formatDocument"
            );
        },
    },
    {
        quickKey: char("r"),
        label: "Rename",
        execute: async () => {
            await vscode.commands.executeCommand("editor.action.rename");
        },
    },
    {
        quickKey: char("s"),
        label: "Open VS Codes's Go to Symbol in Editor",
        execute: async () => {
            await vscode.commands.executeCommand("workbench.action.gotoSymbol");
        },
    },
    {
        quickKey: char("S"),
        label: "Open VS Codes's Go to Symbol in Workspace",
        execute: async () => {
            await vscode.commands.executeCommand(
                "workbench.action.showAllSymbols"
            );
        },
    },
    {
        quickKey: char("h"),
        label: "Show Definition Preview Hover",
        execute: async () => {
            await vscode.commands.executeCommand("editor.action.showHover");
        },
    },
    {
        quickKey: char("l"),
        label: "Toggle fold",
        execute: async () => {
            await vscode.commands.executeCommand("editor.toggleFold");
        },
    },
    {
        quickKey: char("1"),
        label: "Fold level 1",
        execute: async () => {
            await vscode.commands.executeCommand("editor.foldLevel1");
        },
    },
    {
        quickKey: char("2"),
        label: "Fold level 2",
        execute: async () => {
            await vscode.commands.executeCommand("editor.foldLevel2");
        },
    },
    {
        quickKey: char("3"),
        label: "Fold level 3",
        execute: async () => {
            await vscode.commands.executeCommand("editor.foldLevel3");
        },
    },
    {
        quickKey: char("4"),
        label: "Fold level 4",
        execute: async () => {
            await vscode.commands.executeCommand("editor.foldLevel4");
        },
    },
    {
        quickKey: char("5"),
        label: "Fold level 5",
        execute: async () => {
            await vscode.commands.executeCommand("editor.foldLevel5");
        },
    },
    {
        quickKey: char("6"),
        label: "Fold level 6",
        execute: async () => {
            await vscode.commands.executeCommand("editor.foldLevel6");
        },
    },
    {
        quickKey: char("7"),
        label: "Fold level 7",
        execute: async () => {
            await vscode.commands.executeCommand("editor.foldLevel7");
        },
    },
    {
        quickKey: char("0"),
        label: "Unfold all",
        execute: async () => {
            await vscode.commands.executeCommand("editor.unfoldAll");
        },
    },
    {
        quickKey: char("m"),
        label: "Manage Highlights",
        execute: async () => {
            await vscode.commands.executeCommand("vimAtHome.manageHighlights");
        },
    },
    {
        quickKey: char("c"),
        label: "Clear Highlights",
        execute: async () => {
            await vscode.commands.executeCommand("vimAtHome.clearAllHighlights");
        },
    },
];


export const PullCommands: QuickCommand[] = [
    {
        quickKey: char("j"),
        label: "Pull Custom 5",
        execute: async () => {
            await vscode.commands.executeCommand("vimAtHome.pullCustomWord5");
        },
    },
    {
        quickKey: char("k"),
        label: "Pull Custom 6",
        execute: async () => {
            await vscode.commands.executeCommand("vimAtHome.pullCustomWord6");
        },
    },
    {
        quickKey: char("l"),
        label: "Pull Custom 7",
        execute: async () => {
            await vscode.commands.executeCommand("vimAtHome.pullCustomWord7");
        },
    },
    {
        quickKey: char("m"),
        label: "Pull Bracket",
        execute: async () => {
            await vscode.commands.executeCommand("vimAtHome.pullBracketSubject");
        },
    },
    {
        quickKey: char(","),
        label: "Pull Line",
        execute: async () => {
            await vscode.commands.executeCommand("vimAtHome.pullLineSubject");
        },
    },
    {
        quickKey: char("."),
        label: "Pull Block",
        execute: async () => {
            await vscode.commands.executeCommand("vimAtHome.pullBlockSubject");
        },
    }
];

export let SubjectChangeCommands: QuickCommand[] = [];

export function resetSubjectChangeCommands() {
    SubjectChangeCommands = [];
}

export function addSubjectCommand(command: string, key: string, index: number) {
    SubjectChangeCommands.push({
        quickKey: char(key),
        label: `Custom Subject ${index}`,
        execute: async () => {
            await vscode.commands.executeCommand(command);
        },
    })

}