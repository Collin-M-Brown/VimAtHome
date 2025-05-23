import * as vscode from "vscode";
import * as common from "../common";
import { Direction } from "../common";
import Seq, { seq } from "./seq";

export type SelectionCollapsePoint = "start" | "end" | "midpoint" | "surround";

export function getMidPoint(range: vscode.Range): vscode.Position {
    return new vscode.Position(
        range.start.line + Math.floor((range.end.line - range.start.line) / 2),
        range.start.character +
            Math.floor((range.end.character - range.start.character) / 2)
    );
}

export function closerOf(
    startingPosition: vscode.Position,
    a: vscode.Range,
    b: vscode.Range
): vscode.Range {
    if (a.start.line !== b.start.line) {
        return (
            seq([a, b]).tryMinBy((r) =>
                Math.abs(startingPosition.line - r.start.line)
            ) ?? a
        );
    }

    return (
        seq([a, b]).tryMinBy((r) =>
            Math.abs(startingPosition.character - r.start.character)
        ) ?? a
    );
}

export function closerPositionOf(
    document: vscode.TextDocument,
    startingPosition: vscode.Position,
    a: vscode.Position | undefined,
    b: vscode.Position | undefined
): vscode.Position | undefined {
    if (!a) {
        return b;
    }

    if (!b) {
        return a;
    }

    return (
        seq([a, b]).tryMinBy((r) =>
            Math.abs(document.offsetAt(startingPosition) - document.offsetAt(r))
        ) ?? a
    );
}

export function collapseSelections(
    editor: vscode.TextEditor,
    endType: SelectionCollapsePoint
) {
    flatMap(editor, (selection) => {
        if (endType === "surround") {
            return [
                positionToRange(selection.start),
                positionToRange(selection.end),
            ];
        }

        if (endType === "midpoint") {
            return [positionToRange(getMidPoint(selection))];
        }

        return [positionToRange(selection[endType])];
    });
}

export function tryMap(
    editor: vscode.TextEditor,
    mapper: (selection: vscode.Selection) => vscode.Range | undefined
) {
    editor.selections = editor.selections.map((selection) => {
        const rangeOrSelection = mapper(selection);
        
        if (!rangeOrSelection) {
            return selection;
        } else if (rangeOrSelection instanceof vscode.Selection) {
            return rangeOrSelection;
        } else {
            return new vscode.Selection(
                rangeOrSelection.end,
                rangeOrSelection.start,
            );
        }
    });
}

export function flatMap(
    editor: vscode.TextEditor,
    mapper: (selection: vscode.Selection) => (vscode.Selection | vscode.Range)[]
) {
    editor.selections = editor.selections.flatMap((outerSelection) => {
        return mapper(outerSelection).map((innerSelection) => {
            if (!innerSelection) {
                return outerSelection;
            } else if (innerSelection instanceof vscode.Selection) {
                return innerSelection;
            } else {
                return new vscode.Selection(
                    innerSelection.end,
                    innerSelection.start
                );
            }
        });
    });
}

export function expandToIncludeBlankLines(
    editor: vscode.TextEditor,
    range: vscode.Range
): vscode.Range {
    let startLine = range.start.line;
    let endLine = range.end.line;

    if (
        startLine > 0 &&
        editor.document.lineAt(startLine - 1).isEmptyOrWhitespace
    ) {
        startLine--;
    }

    if (
        endLine < editor.document.lineCount - 1 &&
        editor.document.lineAt(endLine + 1).isEmptyOrWhitespace
    ) {
        endLine++;
    }

    const testRange = editor.document.lineAt(startLine).range;

    return new vscode.Range(
        startLine,
        editor.document.lineAt(startLine).firstNonWhitespaceCharacterIndex,
        endLine,
        editor.document.lineAt(endLine).rangeIncludingLineBreak.end.character
    );
}

export function positionToRange(point: vscode.Position): vscode.Range {
    return new vscode.Range(point, point);
}

export function selectionToRange(selection: vscode.Selection): vscode.Range {
    const range = new vscode.Range(
        selection.start,
        selection.end
    );
    return range;
}

export function rangeToSelection(range: vscode.Range): vscode.Selection {
    return new vscode.Selection(range.start, range.end);
}

export function positionToSelection(point: vscode.Position): vscode.Selection {
    return new vscode.Selection(point, point);
}

export function rangeToPosition(
    startingPosition: vscode.Range | vscode.Position,
    direction: common.Direction
): vscode.Position {
    return startingPosition instanceof vscode.Range
        ? startingPosition[direction === Direction.forwards ? "end" : "start"]
        : startingPosition;
}


export function splitByRegex(regex: RegExp, text: string, selection: vscode.Selection): Array<[vscode.Position, vscode.Position]> {
    const pattern = regex instanceof RegExp ? regex.source : regex;
    const currentRegex = new RegExp(pattern, "g");
    const matches: Array<[vscode.Position, vscode.Position]> = [];
    let match;
    while (match = currentRegex.exec(text)) {
        matches.push([
            new vscode.Position(selection.start.line, selection.start.character + match.index),
            new vscode.Position(selection.start.line, selection.start.character + match.index + match[0].length)
        ]);
    }
    return matches;
}
