import WordIO from "../io/WordIO";
import SubjectBase from "./SubjectBase";
import { getWordColor } from "../config";
import * as EditorUtils from "../utils/editor"

export default class WordSubject extends SubjectBase {
    protected subjectIO = new WordIO();

    public readonly outlineColour = {
        dark: `#${getWordColor()}`,
        light: `#${getWordColor()}`,
    } as const;

    public readonly name = "WORD";
    public readonly displayName = "word";
    public readonly jumpPhaseType = "dual-phase";
    
    async firstObjectInScope() {
        this.nextObjectLeft();
        await EditorUtils.findNextWhitespace(this.context.editor, "backwards");
        this.fixSelection();
    }
    
    async lastObjectInScope() {
        this.nextObjectRight();
        await EditorUtils.findNextWhitespace(this.context.editor, "forwards");
        this.fixSelection();
    }
    
    
}
