import * as vscode from "vscode";
import {
    closerPositionOf,
    positionToRange,
    rangeToPosition,
} from "../utils/selectionsAndRanges";
import SubjectIOBase, { IterationOptions } from "./SubjectIOBase";
import { translateWithWrap } from "../utils/positions";
import { iterCharacters } from "../utils/characters";
import { Direction, TextObject } from "../common";
import Seq, { seq } from "../utils/seq";


const openingBrackets = "([{".split("");
const closingBrackets = ")]}".split("");

function getLeftBracket(
    document: vscode.TextDocument,
    startingPosition: vscode.Position,
    direction: Direction = Direction.backwards,
    bounds?: vscode.Range
): { char: string; position: vscode.Position } | undefined {
    let unmatchedCloseBrackets = 0;
    let first = true;

    for (const { char, position } of iterCharacters(document, {
        startingPosition,
        direction: direction,
        currentInclusive: true,
        bounds: bounds
    })) {
        if (openingBrackets.includes(char)) {
            if (unmatchedCloseBrackets === 0) {
                return { char, position };
            }

            if (unmatchedCloseBrackets > 0) {
                unmatchedCloseBrackets--;
            }
        }

        if (closingBrackets.includes(char) && !first) {
            unmatchedCloseBrackets++;
        }

        first = false;
    }

    return undefined;
}

function getRightBracket(
    document: vscode.TextDocument,
    startingPosition: vscode.Position
) {
    let unmatchedOpenBrackets = 0;
    let first = true;

    for (const { char, position } of iterCharacters(document, {
        startingPosition,
        direction: Direction.forwards,
        currentInclusive: true,
    })) {
        if (closingBrackets.includes(char)) {
            if (unmatchedOpenBrackets === 0) {
                return { char, position };
            }

            if (unmatchedOpenBrackets > 0) {
                unmatchedOpenBrackets--;
            }
        }

        if (openingBrackets.includes(char) && !first) {
            unmatchedOpenBrackets++;
        }

        first = false;
    }

    return undefined;
}

function getLastPositionIn(document: vscode.TextDocument) {
    const lastLine = document.lineAt(document.lineCount - 1);
    return lastLine.range.end;
}

function iterRight(
    document: vscode.TextDocument,
    startingPosition: vscode.Position | vscode.Range,
    inclusive: boolean
) {
    const bounds =
        startingPosition instanceof vscode.Range
            ? startingPosition
            : new vscode.Range(startingPosition, getLastPositionIn(document));

    startingPosition = rangeToPosition(startingPosition, Direction.backwards);

    return seq(function* () {
        for (const { char, position } of iterCharacters(document, {
            direction: Direction.forwards,
            startingPosition,
            bounds,
            currentInclusive: true,
        })) {
            if (openingBrackets.includes(char)) {
                const rightBracket = getRightBracket(
                    document,
                    translateWithWrap(document, position, 1) ?? position
                );

                if (rightBracket) {
                    if (inclusive) {
                        yield new vscode.Range(
                            position,
                            rightBracket.position.translate(0, 1)
                        );
                    } else {
                        yield new vscode.Range(
                            position.translate(0, 1),
                            rightBracket.position
                        );
                    }
                }
            }
        }
    });
}

function iterLeft(
    document: vscode.TextDocument,
    startingPosition: vscode.Position | vscode.Range,
    inclusive: boolean
): Seq<TextObject> {
    startingPosition = rangeToPosition(startingPosition, Direction.backwards);

    const bounds = new vscode.Range(
        new vscode.Position(0, 0),
        startingPosition
    );

    return seq(function* () {
        const characters = iterCharacters(document, {
            direction: Direction.backwards,
            startingPosition,
            bounds,
            currentInclusive: true,
        }).tryElementAt(2);

        if (characters) {
            const object = getContainingObjectAt(
                document,
                characters.position,
                inclusive,
                Direction.backwards
            );

            if (object) {
                yield object;
            }
        }
    });
}

function getContainingObjectAt(
    document: vscode.TextDocument,
    position: vscode.Position,
    inclusive: boolean,
    direction: Direction = Direction.forwards
): vscode.Range | undefined {
    
    // console.log("current position")
    // console.log(position)
    let leftBracket = undefined;
    if (direction === Direction.forwards) {
        const line_range = new vscode.Range(position.with(undefined, 0), position.with(undefined, 99999))
        leftBracket = getLeftBracket(document, position, Direction.backwards, line_range);
        // console.log("line_range")
        // console.log(line_range)
        // console.log("leftBracket")
        // console.log(leftBracket)
        
        if (!leftBracket) {
            // leftBracket = getLeftBracket(document, position, Direction.forwards, line_range);
            leftBracket = getLeftBracket(document, position, Direction.forwards, line_range);
            // console.log("leftBracket2")
            // console.log(leftBracket)
        }
        if (!leftBracket) {
            leftBracket = getLeftBracket(document, position, Direction.backwards);
        }
    }
    
    // console.log("left1");
    // console.log(leftBracket);
    
    if (!leftBracket) {
        leftBracket = getLeftBracket(document, position, Direction.backwards);
        // console.log("leftBracket3")
        // console.log(leftBracket)
    }
    
    let rightBracket = undefined;
    if (leftBracket && direction === Direction.forwards) {
        rightBracket = getRightBracket(document, leftBracket.position);
    }
    else {
        rightBracket = getRightBracket(document, position)
    }
    // console.log("right");
    // console.log(rightBracket);
    
    if (
        !leftBracket ||
        !rightBracket ||
        openingBrackets.indexOf(leftBracket.char) !==
            closingBrackets.indexOf(rightBracket.char)
    ) {
        // console.log(`leftchar(${leftBracket?.char}), rightchar(${rightBracket?.char})`)
        return undefined;
    }

    if (inclusive) {
        return new vscode.Range(
            leftBracket.position,
            rightBracket.position.translate(0, 1)
        );
    } else {
        const exclusive_range = new vscode.Range(leftBracket.position.translate(0, 1), rightBracket.position);
        // console.log("exclusive_range")
        // console.log(exclusive_range)
        return exclusive_range
    }
}

function getClosestObjectTo(
    document: vscode.TextDocument,
    position: vscode.Position,
    inclusive: boolean
): vscode.Range {
    
    const leftBracket = iterCharacters(document, {
        startingPosition: position,
        direction: Direction.backwards,
    })
        .filter(
            ({ char }) =>
                closingBrackets.includes(char) || openingBrackets.includes(char)
        )
        .tryFirst();

    const rightBracket = iterCharacters(document, {
        startingPosition: position,
        direction: Direction.forwards,
    })
        .filter(
            ({ char }) =>
                openingBrackets.includes(char) || closingBrackets.includes(char)
        )
        .tryFirst();

    if (!leftBracket && !rightBracket) {
        return positionToRange(position);
    }

    const bestMatch =
        closerPositionOf(
            document,
            position,
            rightBracket?.position,
            leftBracket?.position
        ) ?? position;

    return (
        getContainingObjectAt(document, bestMatch, inclusive) ??
        positionToRange(bestMatch)
    );
}

function iterAll(
    document: vscode.TextDocument,
    options: IterationOptions,
    inclusive: boolean
): Seq<TextObject> {
    return seq(function* () {
        for (const { char, position } of iterCharacters(document, {
            ...options,
            currentInclusive: true,
        })) {
            if (openingBrackets.includes(char)) {
                const rightBracket = getRightBracket(
                    document,
                    translateWithWrap(document, position, 1) ?? position
                );

                if (rightBracket) {
                    if (inclusive) {
                        yield new vscode.Range(
                            position,
                            rightBracket.position.translate(0, 1)
                        );
                    } else {
                        yield new vscode.Range(
                            position.translate(0, 1),
                            rightBracket.position
                        );
                    }
                }
            }
        }
    });
}

function iterHorizontally(
    document: vscode.TextDocument,
    options: IterationOptions,
    inclusive: boolean
): Seq<TextObject> {
    if (options.direction === Direction.forwards) {
        return iterRight(document, options.startingPosition, inclusive);
    } else {
        return iterLeft(document, options.startingPosition, inclusive);
    }
}

function iterScope(
    document: vscode.TextDocument,
    options: IterationOptions,
    inclusive: boolean
) {
    return iterAll(document, options, inclusive);
}

function iterVertically(
    document: vscode.TextDocument,
    options: IterationOptions,
    inclusive: boolean
): Seq<TextObject> {
    const startingPosition = rangeToPosition(
        options.startingPosition,
        options.direction
    );

    const bracketsToLookFor =
        options.direction === Direction.forwards ? openingBrackets : closingBrackets;

    return seq(function* () {
        for (const { char, position } of iterCharacters(document, {
            ...options,
            startingPosition,
            currentInclusive: false,
        })) {
            if (bracketsToLookFor.includes(char)) {
                const containingObject = getContainingObjectAt(
                    document,
                    position,
                    inclusive,
                    options.direction
                );

                if (containingObject) {
                    yield containingObject;
                }
            }
        }
    });
}

export default class BracketIO extends SubjectIOBase {
    deletableSeparators = /^[\s,.:=+\-*\/%]+$/;
    defaultSeparationText = " ";

    constructor(private inclusive: boolean) {
        super();
    }

    getContainingObjectAt(
        document: vscode.TextDocument,
        position: vscode.Position,
        direction: Direction = Direction.forwards
    ) {
        return getContainingObjectAt(document, position, this.inclusive, direction);
    }

    getClosestObjectTo(
        document: vscode.TextDocument,
        position: vscode.Position
    ) {
        return getClosestObjectTo(document, position, this.inclusive);
    }

    iterAll(document: vscode.TextDocument, options: IterationOptions) {
        return iterAll(document, options, this.inclusive);
    }

    iterHorizontally(document: vscode.TextDocument, options: IterationOptions) {
        return iterHorizontally(document, options, this.inclusive);
    }

    iterVertically(document: vscode.TextDocument, options: IterationOptions) {
        return iterVertically(document, options, this.inclusive);
    }

    iterScope(
        document: vscode.TextDocument,
        options: IterationOptions
    ): Seq<TextObject> {
        return iterScope(document, options, this.inclusive);
    }
}
