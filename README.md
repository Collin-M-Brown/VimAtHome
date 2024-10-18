# VimAtHome

Personal development fork of the codeFlea https://github.com/Richiban/codeflea
This is primarily for personal use and has no built in keybindings or guide.
I would recommend using the original but you are welcome to use this if you wish.

```

"workbench.colorCustomizations": {
    "editor.selectionBackground": "#ffffff1e",
}

"workbench.colorCustomizations": { 
    "editor.background": "#101010",
    "editor.selectionBackground": "#62fcff1e",
    "tab.border": "#ffffff",
    "tab.activeBorder": "#ffffff",
    "tab.activeBorderTop": "#ffffff",
    "tab.activeBackground": "#2d2d2d",
    "tab.inactiveForeground": "#ffffff",
    "tab.inactiveBackground": "#000000",
},

"vimAtHome.customWordRegex1":  "public", // matches full word with connectors and brackets
"vimAtHome.customWordRegex2":  "return", // matches full word with connectors and brackets
"vimAtHome.customWordRegex3":  "private", // matches full word with connectors and brackets
"vimAtHome.customWordRegex4":  "[\\w\\.\\-_:\\\\\/]+", // matches full word with connectors and brackets
"vimAtHome.customWordRegex5": "([a-zA-Z][\\w.\\-_?:]*(?:<[^<>]*>)?(?:\\[(?:[^\\[\\]]|\\[[^\\[\\]]*\\])*\\]|\\((?:[^()]|\\([^()]*\\))*\\))*)",
"vimAtHome.customWordRegex6": "(['\"])(?:(?!\\1).)*\\1",  // Matches both single and double quotes

"vimAtHome.color.customWord1": "3381ff",
"vimAtHome.color.customWord2": "ffff00",
"vimAtHome.color.customWord3": "cf9700",
"vimAtHome.color.customWord4": "3381ff",
"vimAtHome.color.customWord5": "ffff00",
"vimAtHome.color.customWord6": "cf9700",


```

```

[
    {
        "key": "ctrl+;",
        "command": "findJump.activate",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+shift+;",
        "command": "findJump.activateWithSelection",
        "when": "editorTextFocus"
    },
    {
        "key": "f16",
        "command": "runCommands",
        "args": {
            "commands": [
                // "vimAtHome.scrollEditorDown",
                "editor.action.fontZoomReset",
                "workbench.action.zoomReset",
                "vimAtHome.scrollToCursor",
            ]
 
        },
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+shift+up",
        "command": "cursorPageUpSelect",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+shift+down",
        "command": "cursorPageDownSelect",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+f4",
        "command": "workbench.action.navigateBack",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+f6",
        "command": "workbench.action.navigateForward",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+shift+f5",
        "command": "editor.action.revealDefinition",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+shift+alt+right",
        "command": "cursorLineEndSelect",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+alt+left",
        "command": "cursorLineStart",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+shift+alt+left",
        "command": "cursorLineStartSelect",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+l",
        "command": "-center-editor-window.center",
        "when": "editorTextFocus || findWidgetVisible"
    },
    {
        "key": "alt+pageUp",
        "command": "editor.action.insertCursorAbove",
        "when": "editorTextFocus"
    },
    {
        "key": "alt+pageDown",
        "command": "editor.action.insertCursorBelow",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+f11",
        "command": "workbench.action.closeEditorsToTheRight",
        // "when": "editorTextFocus"
    },
    {
        "key": "ctrl+f10",
        "command": "workbench.action.closeEditorsToTheLeft",
        // "when": "editorTextFocus"
    },
    {
        "key": "ctrl+shift+pageUp",
        "command": "workbench.action.moveEditorLeftInGroup",
        // "when": "editorTextFocus"
    },
    {
        "key": "ctrl+p",
        "command": "workbench.action.quickOpen",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+shift+p",
        "command": "workbench.action.showCommands",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+shift+alt+p",
        "command": "workbench.action.showCommands",
        "when": "editorTextFocus"
    },
 
    {
        "key": "ctrl+k space",
        "command": "editor.action.goToSelectionAnchor"
    },
    {
        "key": "shift+alt+s",
        "command": "bookmarks.clear"
    },
    {
        "key": "ctrl+alt+i",
        "command": "bookmarks.clearFromAllFiles"
    },
    {
        "key": "ctrl+alt+,",
        "command": "bookmarks.list"
    },
    {
        "key": "ctrl+alt+.",
        "command": "bookmarks.listFromAllFiles"
    },
   
 
 
    {
        "key": "alt+i",
        "command": "bookmarks.clear"
    },
    {
        "key": "shift+alt+i",
        "command": "bookmarks.clearFromAllFiles"
    },
 
    {
        "key": "alt+k",
        "command": "bookmarks.toggle"
    },
    {
        "key": "shift+alt+k",
        "command": "bookmarks.toggle"
    },
    {
        "key": "ctrl+alt+k",
        "command": "bookmarks.toggle"
    },
    {
        "key": "shift+ctrl+alt+k",
        "command": "bookmarks.toggle"
    },
 
    {
        "key": "ctrl+alt+j",
        "command": "bookmarks.jumpToPrevious"
    },
    {
        "key": "ctrl+alt+l",
        "command": "bookmarks.jumpToNext"
    },
    {
        "key": "ctrl+shift+alt+j",
        "command": "bookmarks.expandSelectionToPrevious"
    },
    {
        "key": "ctrl+shift+alt+l",
        "command": "bookmarks.expandSelectionToNext"
    },
    {
        "key": "ctrl+",
        "command": "gitlens.diffWithPrevious",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+f9",
        "command": "gitlens.diffWithNext",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+f18",
        "command": "workbench.action.search.toggleQueryDetails",
    },
   
    {
        "key": "ctrl+f1",
        "command": "editor.action.showContextMenu"
    },
    {
        "key": "ctrl+f2",
        "command": "editor.action.showHover"
    },
 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
        "key": "b",
        "command": "-vimAtHome.changeToBlockSubject",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "q",
        "command": "-vimAtHome.changeToSubwordSubject",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "`",
        "command": "-vimAtHome.changeToCharSubject",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "v",
        "command": "-vimAtHome.changeToExtendMode",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND'"
    },
    {
        "key": ",",
        "command": "-vimAtHome.changeToInsertMode",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "v",
        "command": "-vimAtHome.changeToWordSubject",
        "when": "editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "x",
        "command": "-vimAtHome.changeToLineSubject",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "w",
        "command": "-vimAtHome.changeToWordSubject",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "backspace",
        "command": "-cursorUndo",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "r",
        "command": "-editor.action.quickFix",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+k",
        "command": "-vimAtHome.addSubjectDown",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+down",
        "command": "-vimAtHome.addSubjectDown",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+j",
        "command": "-vimAtHome.addSubjectLeft",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+left",
        "command": "-vimAtHome.addSubjectLeft",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+l",
        "command": "-vimAtHome.addSubjectRight",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+right",
        "command": "-vimAtHome.addSubjectRight",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+i",
        "command": "-vimAtHome.addSubjectUp",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+up",
        "command": "-vimAtHome.addSubjectUp",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+a",
        "command": "-vimAtHome.appendNewObject",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "c",
        "command": "-vimAtHome.change",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "n",
        "command": "-vimAtHome.changeToBracketSubject",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "escape",
        "command": "-vimAtHome.changeToCommandModeDefault",
        "when": "textInputFocus && !actionWidgetVisible && !cancellableOperation && !editorHasMultipleSelections && !inlineSuggestionVisible && !messageVisible && !notificationToastsVisible && !parameterHintsVisible && vimAtHome.mode == 'INSERT'"
    },
    {
        "key": "a",
        "command": "-vimAtHome.changeToInsertModeAppend",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "/",
        "command": "-vimAtHome.changeToInsertModeMidPoint",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "p",
        "command": "-vimAtHome.changeToInsertModePrepend",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+/",
        "command": "-vimAtHome.changeToInsertModeSurround",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+c",
        "command": "-vimAtHome.changeToLineEnd",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": ".",
        "command": "-vimAtHome.customVsCodeCommand",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "d",
        "command": "-vimAtHome.deleteSubject",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+d",
        "command": "-vimAtHome.duplicateSubject",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+h",
        "command": "-vimAtHome.extendToNextOccurrence",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+y",
        "command": "-vimAtHome.extendToPrevOccurrence",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "u",
        "command": "-vimAtHome.goToFirstSubjectInScope",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "o",
        "command": "-vimAtHome.goToLastSubjectInScope",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "h",
        "command": "-vimAtHome.goToNextOccurrence",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "y",
        "command": "-vimAtHome.goToPrevOccurrence",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "t",
        "command": "-vimAtHome.jump",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+;",
        "command": "-vimAtHome.newLineAbove",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": ";",
        "command": "-vimAtHome.newLineBelow",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "k",
        "command": "-vimAtHome.nextSubjectDown",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "j",
        "command": "-vimAtHome.nextSubjectLeft",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "l",
        "command": "-vimAtHome.nextSubjectRight",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "i",
        "command": "-vimAtHome.nextSubjectUp",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "g",
        "command": "-vimAtHome.openGoToMenu",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "m",
        "command": "-vimAtHome.openModifyMenu",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "z",
        "command": "-vimAtHome.openViewMenu",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+p",
        "command": "-vimAtHome.prependNewObject",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "enter",
        "command": "-vimAtHome.",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+enter",
        "command": "-vimAtHome.repeatLastSkipBackwards",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "s",
        "command": "-vimAtHome.skip",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+s",
        "command": "-vimAtHome.skipBackwards",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "f",
        "command": "-vimAtHome.skipOver",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "ctrl+k",
        "command": "-vimAtHome.swapSubjectDown",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "ctrl+j",
        "command": "-vimAtHome.swapSubjectLeft",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "ctrl+l",
        "command": "-vimAtHome.swapSubjectRight",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "ctrl+i",
        "command": "-vimAtHome.swapSubjectUp",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
 
    {
        "key": "alt+1",
        "command": "-workbench.action.openEditorAtIndex1"
    },
    {
        "key": "alt+2",
        "command": "-workbench.action.openEditorAtIndex2"
    },
    {
        "key": "alt+3",
        "command": "-workbench.action.openEditorAtIndex3"
    },
    {
        "key": "alt+4",
        "command": "-workbench.action.openEditorAtIndex4"
    },
    {
        "key": "alt+5",
        "command": "-workbench.action.openEditorAtIndex5"
    },
    {
        "key": "alt+6",
        "command": "-workbench.action.openEditorAtIndex6"
    },
    {
        "key": "alt+7",
        "command": "-workbench.action.openEditorAtIndex7"
    },
    {
        "key": "alt+8",
        "command": "-workbench.action.openEditorAtIndex8"
    },
    {
        "key": "alt+9",
        "command": "-workbench.action.openEditorAtIndex9"
    },
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 
    {
        "key": "f17",
        "command": "vimAtHome.changeToSubwordSubject",
        // "when": "textInputFocus && !actionWidgetVisible && !cancellableOperation && !editorHasMultipleSelections && !inlineSuggestionVisible && !messageVisible && !notificationToastsVisible && !parameterHintsVisible && vimAtHome.mode == 'INSERT'"
    },
   
    {
        "key": "shift+down",
        "command": "vimAtHome.skipToCenterWord",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' && vimAtHome.mode != 'EXTEND'"
    },
    {
        "key": "shift+down",
        "command": "vimAtHome.changeToInsertMode",
        "when": "editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
   
    {
        "key": "shift+left",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToInsertModePrepend",
                // "vimAtHome.changeToCharSubject"
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND'"
    },
    {
        "key": "shift+right",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToInsertModeAppend",
                // "cursorLeft",
                // "vimAtHome.changeToCharSubject"
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND'"
    },
    {
        "key": "shift+up",
        "command": "vimAtHome.changeToInsertMode",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+right",
        "command": "vimAtHome.changeToInsertMode",
        "when": "editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+left",
        "command": "vimAtHome.changeToInsertMode",
        "when": "editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    // {
    //     "key": "ctrl+left",
    //     "command": "vimAtHome.goToFirstSubjectInScope",
    //     "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    // },
    // {
    //     "key": "ctrl+right",
    //     "command": "vimAtHome.goToLastSubjectInScope",
    //     "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    // },
    {
        "key": "alt+a",
        "command": "vimAtHome.changeToCharSubject",
        // "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "alt+b",
        "command": "vimAtHome.changeToSubwordSubject",
        // "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "ctrl+shift+alt+b",
        "command": "vimAtHome.changeToSubwordSubject",
        // "when": "editorTextFocus"
    },
    // {
    //     "key": "alt+c",
    //     "command": "vimAtHome.changeToWordSubject",
    //     // "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    // },
    {
        "key": "alt+d",
        "command": "vimAtHome.changeToLineSubject",
        // "when": " && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "alt+e",
        "command": "vimAtHome.changeToBlockSubject",
        // "when": "vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "alt+f",
        "command": "vimAtHome.changeToBracketSubject",
        // "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "ctrl+shift+alt+e",
        "command": "vimAtHome.changeToBlockSubject",
        // "when": "vimAtHome.mode == 'COMMAND'"
    },
    {
        "key": "alt+g",
        "command": "vimAtHome.changeToExtendMode",
        // "when": "editorTextFocus && vimAtHome.mode == 'COMMAND'"
    },
    {
        "key": "alt+h",
        "command": "vimAtHome.skip",
        // "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+alt+h",
        "command": "vimAtHome.skipBackwards",
        // "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "enter",
        "command": "vimAtHome.repeatLastSkip",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+enter",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.changeToWordSubject",
                "vimAtHome.repeatLastSkip",
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode != 'COMMAND' || editorTextFocus && vimAtHome.mode != 'EXTEND'",
    },
    {
        "key": "shift+enter",
        "command": "vimAtHome.repeatLastSkipBackwards",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "ctrl+;",
        "command": "vimAtHome.jump",
        "when": "editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
 
    {
        "key": "shift+f16",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "cursorLeft",
                "editor.action.selectFromAnchorToCursor"
            ]
        }
    },
 
    {
        "key": "ctrl+f16",
        "command": "editor.action.smartSelect.shrink",
    },
    {
        "key": "ctrl+shift+alt+up",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToWordSubject",
                // "settings.cycle.tempColor"
            ]
        }
    },
    {
        "key": "ctrl+shift+alt+down",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToBlockSubject",
                // "settings.cycle.tempColor"
                // "vimAtHome.addSubjectDown"
            ]
        }
    },
    {
        "key": "f20",
        "command": "runCommands",
        "args": {
        "commands": [
                "vimAtHome.changeToInsertMode",
            ]
        }
   },
    {
        "key": "shift+f20",
        "command": "runCommands",
        "args": {
        "commands": [
                "vimAtHome.changeToInsertModePrepend",
            ]
        }
    },
    {
        "key": "ctrl+f20",
        "command": "runCommands",
        "args": {
        "commands": [
                "vimAtHome.changeToInsertModeAppend",
            ]
        }
    },
 
    // {
    //     "key": "ctrl+enter",
    //     "command": "runCommands",
    //     "args": {
    //         "commands": [
    //             "vimAtHome.changeToCharSubject",
    //             "vimAtHome.newLineBelow"
    //         ]
    //     },
    //     "when": "editorTextFocus"
    // },
    {
        "key": "ctrl+enter",
        "command": "vimAtHome.newLineBelow",
        "when": "editorTextFocus"
    },
    // {
    //     "key": "shift+enter",
    //     "command": "vimAtHome.newLineAbove",
    //     "when": "editorTextFocus"
    // },
 
    {
        "key": "ctrl+f18",
        "command": "cursorTrail",
        "when": "editorTextFocus"
    },
    {
        "key": "pageUp",  // or any other key combination you prefer
        "command": "runCommands",
        "args": {
            "commands": [
                {
                    "command": "cursorMove",
                    "args": {
                        "to": "up",
                        "by": "line",
                        "value": 20
                    }
                },
                "vimAtHome.scrollToCursor",
            ]
        },
        "when": "editorTextFocus"
    },
    {
        "key": "pageDown",  // or any other key combination you prefer
        "command": "runCommands",
        "args": {
            "commands": [
                {
                    "command": "cursorMove",
                    "args": {
                        "to": "down",
                        "by": "line",
                        "value": 20
                    }
                },
                "vimAtHome.scrollToCursor",
            ]
        },
       "when": "editorTextFocus"
    },
    // {
    //     "key": "pageUp",  // or any other key combination you prefer
    //     "command": "runCommands",
    //     "args": {
    //         "commands": [
    //             {
    //                 "command": "vimAtHome.nextSubjectUp",
    //                 "args": {
    //                     "value": 20
    //                 }
    //             },
    //             "vimAtHome.scrollToCursor",
    //         ]
    //     },
    //     "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    // },
    // {
    //     "key": "pageDown",  // or any other key combination you prefer
    //     "command": "runCommands",
    //     "args": {
    //         "commands": [
    //             {
    //                 "command": "vimAtHome.nextSubjectDown",
    //                 "args": {
    //                     "to": "down",
    //                     "by": "line",
    //                     "value": 20
    //                 }
    //             },
    //             "vimAtHome.scrollToCursor",
    //         ]
    //     },
    //     "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    // },
    // {
    //     "key": "pageDown",  // or any other key combination you prefer
    //     "command": "cursorMove",
    //     "args": {
    //       "to": "down",
    //       "by": "line",
    //       "value": 30
    //     },
    //    "when": "editorTextFocus"
    // },
    // {
    //     "key": "ctrl+f16",  // or any other key combination you prefer
 
    //    "when": "editorTextFocus"
    // },
    // {
    //     "key": "ctrl+f18",  // or any other key combination you prefer
    //     "command": "cursorPageDown",
    //    "when": "editorTextFocus"
    // },
 
    // {
    //     "key": "",
    //     "command": "runCommands",
    //     "args": {
    //       "commands": [
    //         "editor.createFoldingRangeFromSelection",
    //         "cursorDown",
    //         "cursorBottomSelect",
    //         "editor.createFoldingRangeFromSelection",
    //         "bookmarks.toggle",
    //         "cursorUp",
    //         "cursorUp",
    //         "cursorTopSelect",
    //         "editor.createFoldingRangeFromSelection",
    //         "cursorDown",
    //         "bookmarks.toggle",
    //         "cursorDown",
    //         "editor.unfoldRecursively",
    //       ]
    //     },
    // },
    // {
    //     "key": "ctrl+f16",  // or any other key combination you prefer
 
    //    "when": "editorTextFocus"
    // },
    // {
    //     "key": "ctrl+f18",  // or any other key combination you prefer
    //     "command": "cursorPageDown",
    //    "when": "editorTextFocus"
    // },
 
    // {
    //     "key": "f7",
    //     "command": "runCommands",
    //     "args": {
    //       "commands": [
    //         "editor.createFoldingRangeFromSelection",
    //         "cursorDown",
    //         "cursorBottomSelect",
    //         "editor.createFoldingRangeFromSelection",
    //         "bookmarks.toggle",
    //         "cursorUp",
    //         "cursorUp",
    //         "cursorTopSelect",
    //         "editor.createFoldingRangeFromSelection",
    //         "cursorDown",
    //         "bookmarks.toggle",
    //         "cursorDown",
    //         "editor.unfoldRecursively",
    //       ]
    //     },
    // },
    // {
    //     "key": "shift+alt+enter",
    //     "command": "runCommands",
    //     "args": {
    //         "commands": [
    //             "editor.action.setSelectionAnchor",
    //             "vimAtHome.changeToWordSubject",
    //             "vimAtHome.skip"
    //         ]
    //     },
    // },
    // {
    //     "key": "ctrl+shift+alt+enter",
    //     "command": "runCommands",
    //     "args": {
    //         "commands": [
    //             "editor.action.setSelectionAnchor",
    //             "vimAtHome.changeToWordSubject",
    //             "vimAtHome.skipBackwards"
    //         ]
    //     },
    // },
    {
        "key": "ctrl+shift+alt+enter",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.skipBackwards"
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "ctrl+shift+alt+enter",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.changeToWordSubject",
                "vimAtHome.skipBackwards"
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode == 'INSERT'"
    },
    {
        "key": "shift+alt+enter",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.skip"
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+alt+enter",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.changeToWordSubject",
                "vimAtHome.skip"
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode == 'INSERT'"
    },
    {
        "key": "shift+alt+enter",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.jump"
            ]
        },
        "when": "editorTextFocus && (vimAtHome.subject == 'LINE' || vimAtHome.subject == 'BRACKETS' || vimAtHome.subject == 'BLOCK')"
    },
    {
        "key": "ctrl+shift+alt+enter",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.jump"
            ]
        },
        "when": "editorTextFocus && (vimAtHome.subject == 'LINE' || vimAtHome.subject == 'BRACKETS' || vimAtHome.subject == 'BLOCK')"
    },
    {
        "key": "alt+k",
        "command": "runCommands",
        "args": {
         "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.changeToSubwordSubject",
                // "vimAtHome.changeToCharSubject",
                "vimAtHome.skip",
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode != 'COMMAND' && vimAtHome.mode != 'EXTEND'"
    },
    // {
    //     "key": "shift+alt+enter",
    //     "command": "runCommands",
    //     "args": {
    //         "commands": [
    //             "editor.action.setSelectionAnchor",
    //             "vimAtHome.skipBackwards"
    //         ]
    //     },
    //     "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' && vimAtHome.mode == 'EXTEND'"
    // },
    // {
    //     "key": "shift+alt+h",
    //     "command": "runCommands",
    //     "args": {
    //         "commands": [
    //               "vimAtHome.changeToWordSubject",
    //               "vimAtHome.skip"
    //           ]
    //       },
    //     "when": "editorTextFocus && vimAtHome.mode != 'COMMAND' && vimAtHome.mode != 'EXTEND'"
    // },
    // {
    //     "key": "a",
    //     "command": "setContext",
    //     "args": ["myCustomContext", true]
    // },
    // {
    //     "key": "b",
    //     "command": "setContext",
    //     "args": ["secondContext", true],
    //     "when": "myCustomContext"
    // },
    {
        "key": "ctrl+alt+right",
        "command": "cursorLineEnd"
    },
    {
        "key": "ctrl+alt+left",
        "command": "cursorLineStart",
    },
    {
        "key": "alt+l",
        "command": "-codemap.reveal"
    },
    {
        "key": "shift+f18",
        "command": "bracket-select.select-include",
        "when": "editorTextFocus"
    },
    {
        "key": "alt+a",
        "command": "-bracket-select.select-include",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+f17",
        "command": "bracket-select.undo-select",
        "when": "editorTextFocus"
    },
   
    
    // {
    //     "key": "ctrl+right",
    //     "command": "vimAtHome.addSubjectRight",
    //     "when": "editorTextFocus && (vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'Extend')"
    // },
    // {
    //     "key": "ctrl+left",
    //     "command": "vimAtHome.addSubjectLeft",
    //     "when": "editorTextFocus && (vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'Extend')"
    // },
    // {
   //     "key": "delete",
    //     "command": "vimAtHome.changeToHalfBracketSubjectLeft",
    //     "when": "editorTextFocus && (vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'Extend')"
    // },
    {
        "key": "ctrl+t",
        "command": "UnderScroll.toggleUnderSynchronizedScrolling"
    },
    {
        "key": "ctrl+f5",
        "command": "cursorRedo",
        "when": "editorTextFocus"
    },
   
    {
        "key": "f19",
        "command": "cursorWordEndLeft"
    },
    {
        "key": "f21",
        "command": "cursorWordStartRight"
    },
    {
        "key": "ctrl+f2",
        "command": "vimAtHome.openSpaceMenu",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+f1",
        "command": "vimAtHome.openViewMenu"
    },
    // {
    //     "key": "ctrl+",
    //     "command": "vimAtHome.changeToWordSubject",
    //     "when": "editorTextFocus"
    // },
    // {
    //     "key": "ctrl+left",
    //     "command": "runCommands",
    //     "args": {
    //         "commands": [
    //             "vimAtHome.changeToCharSubject",
    //             // "cursorLeft",
    //         ],
    //     },
    //     "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    // },
    // {
    //     "key": "ctrl+right",
    //     "command": "runCommands",
    //     "args": {
    //         "commands": [
   //             "vimAtHome.changeToInsertModeAppend",
    //             "vimAtHome.changeToCharSubject"
    //             // "vimAtHome.nextWordDefinition",
    //             // "cursorWordEndRight",
    //             // "cursorRight",
    //         ],
    //     },
    //     "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    // },
    {
        "key": "shift+end",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToInsertMode",
                "cursorEndSelect"
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+home",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToInsertMode",
                "cursorBeginSelect"
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+home",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToInsertMode",
                "cursorBeginSelect"
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "ctrl+l",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToLineSubject",
            ]
        },
        "when": "editorTextFocus"// && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
   
    {
        "key": "ctrl+f7",
        "command": "vimAtHome.changeToWordSubject",
        "when": "editorTextFocus"
    },
    {
        "key": "f7",
        // "command": "vimAtHome.changeToCommandModeDefault",
        "command": "vimAtHome.changeToWordSubject",
        "when": "editorTextFocus"
    },
    {
        "key": "alt+f16",
        "command": "codemarks.createMark",
       "when": "editorTextFocus"
    },
    {
        "key": "alt+f17",
        "command": "codemarks.jumpToMark",
        "when": "editorTextFocus"
    },
    {
        "key": "alt+f18",
        "command": "codemarks.selectToMark",
        "when": "editorTextFocus"
    },
    {
        "key": "alt+shift+f16",
        "command": "codemarks.clearAllLocalMarks",
        "when": "editorTextFocus"
    },
    {
        "key": "alt+shift+f17",
        "command": "codemarks.clearAllMarks",
       "when": "editorTextFocus"
    },
    {
        "key": "alt+shift+f17",
        "command": "codemarks.listMarks",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+shift+alt+'",
        "command": "codemarks.listMarks",
        "when": "editorTextFocus"
    },
    // {
    //     "key": "delete",
    //     "command": "codemarks.listMarksDelete",
    //     "when": "editorTextFocus"
    // },
   
    {
        "key": "shift+up",
        "command": "vimAtHome.changeToInsertModeMidPoint",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "ctrl+up",
        "command": "vimAtHome.scrollEditorUp",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+down",
        "command": "vimAtHome.scrollEditorDown",
        "when": "editorTextFocus"
    },
    {
        "key": "home",
        "command": "vimAtHome.goToFirstSubjectInScope",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "end",
        "command": "vimAtHome.goToLastSubjectInScope",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "ctrl+t",
        "command": "welcome.showNewFileEntries"
    },
    // {
    //     "key": ";",
    //     "command": "vimAtHome.jump",
    //     "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    // },
 
    {
        "key": "alt+shift+d",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.changeToCharSubject",
                "editor.action.setSelectionAnchor",
                "vimAtHome.jumpToLineSubject"
            ]
        },
        "when": "editorTextFocus"
    },
    {
        "key": "alt+shift+d",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.changeToCharSubject",
                "editor.action.setSelectionAnchor",
                "vimAtHome.jumpToLineSubject"
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode != 'COMMAND'"
    },
    {
        "key": "alt+shift+e",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.changeToCharSubject",
                "editor.action.setSelectionAnchor",
                "vimAtHome.jumpToBlockSubject"
            ]
        },
        "when": "editorTextFocus"
    },
    {
        "key": "alt+shift+f",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.changeToCharSubject",
                "editor.action.setSelectionAnchor",
                "vimAtHome.jumpToBracketSubject"
            ]
        },
        "when": "editorTextFocus"
    },
    {
        "key": "alt+shift+d",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.jumpToLineSubject"
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "ctrl+alt+f",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.jumpToBlockSubject"
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "alt+shift+f",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.jumpToBracketSubject"
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
 
    {
        "key": "ctrl+alt+up",
        "command": "vimAtHome.addSubjectUp",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "ctrl+alt+down",
        "command": "vimAtHome.addSubjectDown",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
 
    {
        "key": "backspace",
        "command": "vimAtHome.deleteSubject",
        "when": "editorTextFocus && (vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND') && vimAtHome.subject != LINE"
    },
    {
        "key": "ctrl+shift+f17",
        "command": "search.action.focusSearchList",
        // "when": "editorTextFocus"//&& vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    // {
    //     // "key": "ctrl+t",
    //     // "command": "workbench.action.quickOpenPreviousEditor"
    // },
    {
        "key": "ctrl+t",
        "command": "workbench.action.openPreviousEditorFromHistory"
    },
 
    {
        "key": "alt+ctrl+shift+1",
        "command": "workbench.action.openEditorAtIndex1"
    },
    {
        "key": "alt+ctrl+shift+2",
        "command": "workbench.action.openEditorAtIndex2"
    },
    {
        "key": "alt+ctrl+shift+3",
        "command": "workbench.action.openEditorAtIndex3"
    },
    {
        "key": "alt+ctrl+shift+4",
        "command": "workbench.action.openEditorAtIndex4"
    },
    {
        "key": "alt+ctrl+shift+5",
        "command": "workbench.action.openEditorAtIndex5"
    },
    {
        "key": "alt+ctrl+shift+6",
        "command": "workbench.action.openEditorAtIndex6"
    },
    {
        "key": "alt+ctrl+shift+7",
        "command": "workbench.action.openEditorAtIndex7"
    },
    {
        "key": "alt+ctrl+shift+8",
        "command": "workbench.action.openEditorAtIndex8"
    },
    {
        "key": "alt+ctrl+shift+9",
        "command": "workbench.action.openEditorAtIndex9"
    },
    {
        "key": "ctrl+k ctrl+shift+f1",
        "command": "vimAtHome.openGoToMenu"
    },
    {
        "key": "ctrl+k ctrl+shift+f2",
        "command": "vimAtHome.openSpaceMenu"
    },
    {
        "key": "ctrl+k ctrl+shift+f3",
        "command": "vimAtHome.openViewMenu"
    },
    {
        "key": "ctrl+k ctrl+shift+f4",
        "command": "vimAtHome.openModifyMenu"
    },
 
    {
        "key": "ctrl+a",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToInsertMode",
                "editor.action.selectAll",
            ],
        },
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "space",
        "command": "-vimAtHome.openSpaceMenu",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "ctrl+w",
        "command": "workbench.action.terminal.kill",
        "when": "terminalFocus"
    },
    {
        "key": "ctrl+t",  // Or any other key combination you prefer
        "command": "workbench.action.terminal.new",
        "when": "terminalFocus"
    },
    {
        "key": "ctrl+;",  // Or any other key combination you prefer
        "command": "vimAtHome.openTerminalAtFilePath",
        // "when": "terminalFocus"
    },
   
    // {
    //     "key": "alt+f17",
    //     "command": "github.copilot.toggleCopilot"
    // },
 
    // {
    //     "key": "ctrl+shift+c",
    //     "command": "vimAtHome.pullWord",
    //     "when": "editorTextFocus"
    // },
    // {
    //     "key": "ctrl+shift+alt+a",
    //     "command": "vimAtHome.pullCustomWord1",
    //     "when": "editorTextFocus"
    // },
    // {
    //     "key": "ctrl+shift+alt+b",
    //     "command": "vimAtHome.pullCustomWord2",
    //     "when": "editorTextFocus"
    // },
    // {
    //     "key": "ctrl+shift+alt+c",
    //     "command": "vimAtHome.pullCustomWord3",
    //     "when": "editorTextFocus"
    // },
    // {
    //     "key": "ctrl+alt+d",
    //     "command": "vimAtHome.pullLineSubject",
    //     "when": "editorTextFocus"
    // },
    // {
    //     "key": "ctrl+alt+e",
    //     "command": "vimAtHome.pullBracketSubject",
    //     "when": "editorTextFocus"
    // },
    // {
    //     "key": "ctrl+alt+f",
    //     "command": "vimAtHome.pullBlockSubject",
    //     "when": "editorTextFocus"
    // },
    {
        "key": "ctrl+shift+f7",
        "command": "workbench.action.navigateToLastEditLocation",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+k ctrl+alt+left",
        "command": "workbench.action.navigateBackInEditLocations",
    },
    {
        "key": "ctrl+k ctrl+alt+right",
        "command": "workbench.action.navigateForwardInEditLocations",
    },
 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
    {
        "key": "ctrl+j a",
        "command": "vimAtHome.changeToCharSubject",
    },
    {
        "key": "ctrl+shift+j a",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.changeToCharSubject",
                "vimAtHome.jump",
            ],
        },
    },
    {
        "key": "ctrl+j ctrl+a",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.changeToCharSubject",
                "vimAtHome.skip",
            ],
        },
    },
    {
        "key": "ctrl+shift+j ctrl+a",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.changeToInsertModeAppend",
                "vimAtHome.changeToCharSubject",
                "vimAtHome.skipBackwards",
            ],
        },
    },
    {
        "key": "ctrl+j alt+a",
        "command": "vimAtHome.pullCharSubject"
    },
   
    // Subword (b)
    {
        "key": "ctrl+j b",
        "command": "vimAtHome.changeToSubwordSubject",
    },
    {
        "key": "ctrl+shift+j b",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.changeToSubwordSubject",
                "vimAtHome.jump",
            ],
        },
    },
    {
        "key": "ctrl+j ctrl+b",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToSubwordSubject",
                "vimAtHome.skip",
            ],
        },
    },
    {
        "key": "ctrl+shift+j ctrl+b",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToSubwordSubject",
                "vimAtHome.skipBackwards",
            ],
        },
    },
    {
        "key": "ctrl+j alt+b",
        "command": "vimAtHome.pullSubword"
    },
 
    // Word (c)
    {
        "key": "ctrl+j c",
        "command": "vimAtHome.changeToWordSubject",
    },
    {
        "key": "ctrl+shift+j c",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.jumpToWordSubject",
            ],
        },
    },
    {
        "key": "ctrl+j ctrl+c",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToWordSubject",
                "vimAtHome.skip",
            ],
        },
    },
    {
        "key": "ctrl+shift+j ctrl+c",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToWordSubject",
                "vimAtHome.skipBackwards",
            ],
        },
    },
    {
        "key": "ctrl+j alt+c",
        "command": "vimAtHome.pullWord"
    },
 
    // CustomWord1 (d)
    {
        "key": "ctrl+j d",
        "command": "vimAtHome.changeToCustomWord1",
    },
    {
        "key": "ctrl+shift+j d",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
               "vimAtHome.jumpToCustomWord1",
            ],
        },
    },
    {
        "key": "ctrl+j ctrl+d",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToCustomWord1",
                "vimAtHome.skip",
            ],
        },
    },
    {
        "key": "ctrl+shift+j ctrl+d",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToCustomWord1",
                "vimAtHome.skipBackwards",
            ],
        },
    },
    {
        "key": "ctrl+j alt+d",
        "command": "vimAtHome.pullCustomWord1"
    },
 
    // CustomWord2 (e)
    {
        "key": "ctrl+j e",
        "command": "vimAtHome.changeToCustomWord2",
    },
    {
        "key": "ctrl+shift+j e",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.jumpToCustomWord2",
            ],
        },
    },
    {
        "key": "ctrl+j ctrl+e",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToCustomWord2",
                "vimAtHome.skip",
            ],
        },
    },
    {
        "key": "ctrl+shift+j ctrl+e",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToCustomWord2",
                "vimAtHome.skipBackwards",
            ],
        },
    },
    {
        "key": "ctrl+j alt+e",
        "command": "vimAtHome.pullCustomWord2"
    },
 
    // CustomWord3 (f)
    {
        "key": "ctrl+j f",
        "command": "vimAtHome.changeToCustomWord3",
    },
    {
        "key": "ctrl+shift+j f",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
               "vimAtHome.jumpToCustomWord3",
            ],
        },
    },
    {
        "key": "ctrl+j ctrl+f",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToCustomWord3",
                "vimAtHome.skip",
            ],
        },
    },
    {
        "key": "ctrl+shift+j ctrl+f",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToCustomWord3",
                "vimAtHome.skipBackwards",
            ],
        },
    },
    {
        "key": "ctrl+j alt+f",
        "command": "vimAtHome.pullCustomWord3"
    },
 
    // Bracket (g)
    {
        "key": "ctrl+j g",
        "command": "vimAtHome.changeToBracketSubject",
    },
    {
        "key": "ctrl+shift+j g",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.jumpToBracketSubject",
            ],
        },
    },
    {
        "key": "ctrl+j ctrl+g",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToBracketSubject",
                "vimAtHome.skip",
            ],
        },
    },
    {
        "key": "ctrl+shift+j ctrl+g",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToBracketSubject",
                "vimAtHome.skipBackwards",
            ],
        },
    },
    {
        "key": "ctrl+j alt+g",
        "command": "vimAtHome.pullBracketSubject"
    },
 
    // Line (h)
    {
        "key": "ctrl+j h",
        "command": "vimAtHome.changeToLineSubject",
    },
    {
        "key": "ctrl+shift+j h",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.jumpToLineSubject",
            ],
        },
    },
    {
        "key": "ctrl+shift+j h",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToLineSubject",
                "editor.action.setSelectionAnchor",
                "vimAtHome.jumpToLineSubject",
            ],
        },
        "when": "vimAtHome.mode != 'COMMAND' && vimAtHome.mode != 'EXTEND'"
    },
    {
        "key": "ctrl+j ctrl+h",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToLineSubject",
                "vimAtHome.skip",
            ],
        },
    },
    {
        "key": "ctrl+shift+j ctrl+h",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToLineSubject",
                "vimAtHome.skipBackwards",
            ],
        },
    },
    {
        "key": "ctrl+j alt+h",
        "command": "vimAtHome.pullLineSubject"
    },
 
    // File (i)
    {
        "key": "ctrl+j i",
        "command": "vimAtHome.changeToBlockSubject",
    },
    {
        "key": "ctrl+shift+j i",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.jumpToBlockSubject",
            ],
        },
    },
    {
        "key": "ctrl+j ctrl+i",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToBlockSubject",
                "vimAtHome.skip",
            ],
        },
    },
    {
        "key": "ctrl+shift+j ctrl+i",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToBlockSubject",
                "vimAtHome.skipBackwards",
            ],
        },
    },
    {
        "key": "ctrl+j alt+i",
        "command": "vimAtHome.pullBlockSubject"
    },
    {
        "key": "alt+;",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.jump",
            ],
        },
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "alt+;",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.changeToWordSubject",
                "vimAtHome.jump",
            ],
        },
        "when": "editorTextFocus && (vimAtHome.mode != 'COMMAND' && vimAtHome.mode != 'EXTEND' || vimAtHome.subject == 'LINE' || vimAtHome.subject == 'BLOCK' || vimAtHome.subject == 'BRACKETS')"
    },
    // {
    //     "key": "space",
    //     "command": "vimAtHome.changeToInsertMode",
    //     "when": "editorTextFocus && vimAtHome.mode == 'COMMAND'"
    // },
    // {
    //     "key": "ctrl+left",
    //     "command": "vimAtHome.changeToBlockSubject",
    //     "when": "editorTextFocus && vimAtHome.subject == 'CHAR'"
    // },
    // {
    //     "key": "ctrl+left",
    //     "command": "vimAtHome.changeToCharSubject",
    //     "when": "editorTextFocus && vimAtHome.subject == 'SUBWORD'"
    // },
    // {
    //     "key": "shift+ctrl+left",
    //     "command": "vimAtHome.prevWordDefinition",
    //     "when": "editorTextFocus && vimAtHome.subject == 'WORD' && vimAtHome.mode == 'COMMAND'"
    // },
    // {
    //     "key": "shift+ctrl+right",
    //     "command": "vimAtHome.nextWordDefinition",
    //     "when": "editorTextFocus && vimAtHome.subject == 'WORD'"
    // },
    // {
    //     "key": "ctrl+left",
    //     "command": "vimAtHome.changeToWordSubject",
    //     "when": "editorTextFocus && vimAtHome.subject == 'BRACKETS'"
    // },
    // {
    //     "key": "ctrl+left",
    //     "command": "vimAtHome.changeToBracketSubject",
    //     "when": "editorTextFocus && vimAtHome.subject == 'LINE'"
    // },
    // {
    //     "key": "ctrl+left",
    //     "command": "vimAtHome.changeToLineSubject",
    //     "when": "editorTextFocus && vimAtHome.subject == 'BLOCK'"
    // },
    // {
    //     "key": "ctrl+right",
    //     "command": "vimAtHome.changeToSubwordSubject",
    //     "when": "editorTextFocus && vimAtHome.subject == 'CHAR'"
    // },
    // {
    //     "key": "ctrl+right",
    //     "command": "vimAtHome.changeToWordSubject",
    //     "when": "editorTextFocus && vimAtHome.subject == 'SUBWORD'"
    // },
   // {
    //     "key": "ctrl+right",
    //     "command": "vimAtHome.changeToBracketSubject",
    //     "when": "editorTextFocus && vimAtHome.subject == 'BRACKETS'"
    // },
    // {
    //     "key": "ctrl+right",
    //     "command": "vimAtHome.changeToBlockSubject",
    //     "when": "editorTextFocus && vimAtHome.subject == 'LINE'"
    // },
    // {
    //     "key": "ctrl+right",
    //     "command": "vimAtHome.changeToCharSubject",
    //     "when": "editorTextFocus && vimAtHome.subject == 'BLOCK'"
    // },
    {  
        "key": "shift+alt+right",
        "command": "vimAtHome.changeToBracketSubject",
        "when": "editorTextFocus && vimAtHome.mode != 'EXTEND'"
    },
    {  
        "key": "shift+alt+left",
        "command": "vimAtHome.changeToSubwordSubject",
        "when": "editorTextFocus"
    },
    // {
    //     "key": "delete",
    //     "command": "workbench.action.terminal.newWithCwd"
    // }
    // {
    //     "key": "ctrl+shift+\\",
    //     "command": "vimAtHome.changeToBracketSubject",
    //     "when": "editorTextFocus"
    // },
    {
        "key": "alt+enter",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.repeatLastSkip",
                "vimAtHome.changeToInsertModeAppend"
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode != 'COMMAND' && vimAtHome.mode != 'EXTEND'"
    },
    {
        "key": "shift+enter",
        "command": "runCommands",
        "args": {
            "commands": [
                // "editor.action.goToSelectionAnchor",
                "vimAtHome.repeatLastSkipBackwards",
                "vimAtHome.changeToInsertModePrepend"
            ]
       },
        "when": "editorTextFocus && vimAtHome.mode != 'COMMAND' && vimAtHome.mode != 'EXTEND'"
    },
    {
        "key": "ctrl+right",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.nextWordDefinition",
                // "vimAtHome.nextSubjectRight",
                // "vimAtHome.nextSubjectRight"
            ]
        },
        "when": "editorTextFocus && vimAtHome.subject == 'WORD' && vimAtHome.mode != 'INSERT'"
    },
    {
        "key": "ctrl+left",
        "command": "runCommands",
        "args": {
            "commands": [
                // "vimAtHome.nextSubjectLeft",
                "vimAtHome.prevWordDefinition",
                // "vimAtHome.nextSubjectLeft"
            ]
        },
        "when": "editorTextFocus && vimAtHome.subject == 'WORD' && vimAtHome.mode != 'INSERT'"
    },
    // {
    //     "key": "ctrl+right",
    //     "command": "runCommands",
    //     "args": {
    //         "commands": [
    //             "vimAtHome.nextSubjectRight",
    //             "vimAtHome.nextSubjectRight"
    //         ]
    //     },
    //     "when": "editorTextFocus && vimAtHome.subject == 'WORD' && vimAtHome.mode != 'INSERT'"
    // },
    {
        "key": "ctrl+left",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.nextSubjectLeft",
                "vimAtHome.nextSubjectLeft"
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "down",
        "command": "vimAtHome.nextSubjectDown",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "up",
        "command": "vimAtHome.nextSubjectUp",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "ctrl+alt+down",
        "command": "vimAtHome.addSubjectDown",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "ctrl+alt+up",
        "command": "vimAtHome.addSubjectUp",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "left",
        "command": "vimAtHome.nextSubjectLeft",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "right",
        "command": "vimAtHome.nextSubjectRight",
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "ctrl+u",
        "command": "-editsHistory.createEditAtCursor"
    },
    {
        "key": "f17",
        "command": "vimAtHome.changeToExtendMode",
    },
    {
        "key": "shift+up",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToInsertModeMidPoint",
                "vimAtHome.changeToWordSubject",
                "vimAtHome.changeToWordSubject"
            ]
        },
        "when": "editorTextFocus && vimAtHome.subject == 'LINE' && vimAtHome.mode == 'COMMAND'"
    },
    {
        "key": "shift+up",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToInsertModeMidPoint",
                "vimAtHome.changeToSubwordSubject"
            ]
        },
        "when": "editorTextFocus && vimAtHome.subject == 'WORD' && vimAtHome.mode == 'COMMAND'"
    },
    {
        "key": "shift+up",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToInsertModeMidPoint",
                "vimAtHome.changeToWordSubject"
            ]
        },
        "when": "editorTextFocus && vimAtHome.subject == 'BRACKETS' && vimAtHome.mode == 'COMMAND'"
   },
    {
        "key": "shift+up",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToInsertModeMidPoint",
                "vimAtHome.changeToLineSubject"
            ]
        },
        "when": "editorTextFocus && vimAtHome.subject == 'BLOCK' && vimAtHome.mode == 'COMMAND'"
    },
    {
        "key": "ctrl+up",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.scrollEditorUp",
            ]
        },
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+down",
        "command": "runCommands",
        "args": {
            "commands": [
                // "scrollEditorDown",
                "scrollLineDown",
                "scrollLineDown",
                "scrollLineDown",
                "scrollLineDown",
                "scrollLineDown",
                "scrollLineDown",
                "scrollLineDown",
                "scrollLineDown",
                "scrollLineDown",
                "scrollLineDown",
            ]
        },
        "when": "editorTextFocus"
    },
    {
        "key": ",",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.changeToLineSubject",
                "vimAtHome.changeToInsertModeAppend",
                {
                    "command": "type",
                    "args": { "text": "," }
                },
                "editor.action.goToSelectionAnchor",
                "vimAtHome.changeToWordSubject"
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    // {
    //     "key": ";",
    //     "command": "runCommands",
    //     "args": {
    //         "commands": [
    //             "editor.action.setSelectionAnchor",
    //             "vimAtHome.changeToLineSubject",
    //             "vimAtHome.changeToInsertModeAppend",
    //             {
    //                 "command": "type",
    //                 "args": { "text": ";" }
    //             },
    //             "editor.action.goToSelectionAnchor",
    //             "vimAtHome.changeToWordSubject"
    //         ]
    //     },
    //     "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    // },
    {
        "key": "ctrl+1",
        "command": "workbench.action.openEditorAtIndex1",
    },
    {
        "key": "ctrl+2",
        "command": "workbench.action.openEditorAtIndex2",
    },
    {
        "key": "ctrl+3",
        "command": "workbench.action.openEditorAtIndex3",
    },
    {
        "key": "ctrl+4",
        "command": "workbench.action.openEditorAtIndex4",
    },
    {
        "key": "ctrl+5",
        "command": "workbench.action.openEditorAtIndex5",
    },
    {
        "key": "ctrl+6",
        "command": "workbench.action.openEditorAtIndex6",
    },
    {
        "key": "ctrl+7",
        "command": "workbench.action.openEditorAtIndex7",
    },
    {
        "key": "ctrl+8",
        "command": "workbench.action.openEditorAtIndex8",
    },
    {
        "key": "ctrl+9",
        "command": "workbench.action.openEditorAtIndex9",
    },
    // {
    //     "key": "f17",
    //     // "command": "editor.action.fontZoomIn"
    //     "command": "runCommands",
    //     "args": {
    //         "commands": [
    //             "editor.action.fontZoomOut",
    //             "editor.action.fontZoomOut",
    //             "editor.action.fontZoomOut",
    //             "workbench.action.zoomOut",
    //             "workbench.action.zoomOut",
    //             "workbench.action.zoomOut",
                // "vimAtHome.scrollToCursor",
    //         ]
    //     },
    //     "when": "editorTextFocus"
    // },
    {
        "key": "ctrl+shift+f7",
        "command": "editor.action.fontZoomIn"
    },
    // {
    //     "key": "delete",
    //     "command": "vimAtHome.openModifyMenu",
 
    // },
    // {
    //     "key": "delete",
    //     "command": "vimAtHome.openModifyMenu",
 
    // },
    {
        "key": "f17",
        "command": "vimAtHome.zoomJump",
 
    },
    {
        "key": "ctrl+alt+p",
        "command": "fuzzySearch.activeTextEditor",
        "when": "editorTextFocus"
    },
 
    {
        "key": "ctrl+shift+right",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToInsertModePrepend",
                "vimAtHome.changeToHalfLineSubjectRight",
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "ctrl+shift+left",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToInsertModeAppend",
                "vimAtHome.changeToHalfLineSubjectLeft",
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "alt+delete",
        "command": "vimAtHome.deleteLineAbove",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+alt+delete",
        "command": "vimAtHome.deleteLineBelow",
        "when": "editorTextFocus"
    },
    {
        "key": "right",
       "command": "editor.action.inlineSuggest.acceptNextWord",
        "when": "inlineSuggestionVisible && !editorReadonly"
    },
    {
        "key": "end",
        "command": "editor.action.inlineSuggest.acceptNextLine",
        "when": "inlineSuggestionVisible && !editorReadonly"
    },
    // {
    //     "key": "shift+f18",
    //     "command": "editor.action.inlineSuggest.acceptNextLine",
    //     "when": "inlineSuggestionVisible && !editorReadonly"
    // },
    // {
    //     "key": "end",
    //     "command": "editor.action.inlineSuggest.acceptNextLine",
    //     "when": "inlineSuggestionVisible && !editorReadonly"
    // },
 
    // {
    //          vimAtHome.change
    //     vimAtHome.addSubjectRight
    //     vimAtHome.appendNewObject
    // }
    {
        "key": "ctrl+enter",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.newLineBelow",
                "vimAtHome.changeToInsertMode",
            ]
        },
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+enter",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.newLineBelow",
                "vimAtHome.changeToInsertMode",
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "ctrl+shift+enter",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.newLineAbove",
                "vimAtHome.changeToInsertMode",
            ]
        },
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+shift+enter",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.newLineAbove",
                "vimAtHome.changeToInsertMode",
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "ctrl+alt+j",
        "command": "GitVision.jumpToPrevChange",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+alt+l",
        "command": "GitVision.jumpToNextChange",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+shift+pageUp",
        "command": "workbench.action.moveTerminalEditorLeftInGroup",
        "when": "terminalEditorFocus"
    },
    {
        "key": "ctrl+left",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.nextSubjectLeft",
                "vimAtHome.nextSubjectLeft",
                "vimAtHome.nextSubjectLeft",
                "vimAtHome.nextSubjectLeft",
                "vimAtHome.nextSubjectLeft",
            ]
        },
        "when": "editorTextFocus && (vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND') && (vimAtHome.subject != 'WORD')"
    },
    {
        "key": "ctrl+right",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.nextSubjectRight",
                "vimAtHome.nextSubjectRight",
                "vimAtHome.nextSubjectRight",
                "vimAtHome.nextSubjectRight",
                "vimAtHome.nextSubjectRight",
            ]
        },
        "when": "editorTextFocus && (vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND') && (vimAtHome.subject != 'WORD')"
    },
    {
        "key": "ctrl+left",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.nextSubjectLeft",
                "vimAtHome.nextSubjectLeft",
                "vimAtHome.nextSubjectLeft",
            ]
        },
        "when": "editorTextFocus && (vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND') && (vimAtHome.subject == 'SUBWORD')"
    },
    {
        "key": "ctrl+right",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.nextSubjectRight",
                "vimAtHome.nextSubjectRight",
                "vimAtHome.nextSubjectRight",
            ]
        },
        "when": "editorTextFocus && (vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND') && (vimAtHome.subject == 'SUBWORD')"
    },
    {
        "key": "ctrl+j ctrl+f",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToSubject",
                "vimAtHome.changeToExtendMode",
               "vimAtHome.skip",
            ]
        },
        "when": "editorTextFocus"
    },
   
    {
        "key": "shift+alt+enter",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.setSelectionAnchor",
                "vimAtHome.skip"
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "shift+space",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToBlockSubject"
            ]
        },
        "when": "editorTextFocus"
    },
    {
        "key": "shift+alt+right",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToBracketSubject"
            ]
        },
        "when": "editorTextFocus"
    },
    {
        "key": "shift+alt+left",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToHalfBracketSubjectRight"
            ]
        },
        "when": "editorTextFocus"
    },
    {
        "key": "f17",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToLineSubject",
                "vimAtHome.jumpToLineSubject",
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode != 'LINE'"
    },
    {
        "key": "f17",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.jump",
            ]
        },
        "when": "editorTextFocus && vimAtHome.mode == 'EXTEND'"
    },
    {
        "key": "ctrl+shift+f21",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToLineSubject",
                "vimAtHome.changeToExtendMode",
                "vimAtHome.jump",
            ],
        },
        "when": "editorTextFocus"
    },
    {
        "key": "delete",
        "command": "runCommands",
        "args": {
            "commands": [
                "editor.action.joinLines",
            ],
        },
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND'"
    },
    {
        "key": "alt+shift+p",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.addHighlight",
            ],
        },
        "when": "editorTextFocus"
    },
    {
        "key": "shift+home",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToInsertModeAppend",
                "vimAtHome.changeToHalfLineSubjectLeft",
            ],
        },
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND'"
    },
    {
        "key": "shift+end",
        "command": "runCommands",
        "args": {
            "commands": [
                "vimAtHome.changeToInsertModePrepend",
                "vimAtHome.changeToHalfLineSubjectRight",
            ],
        },
        "when": "editorTextFocus && vimAtHome.mode == 'COMMAND'"
    },
    // {
    //     "key": "ctrl+c",
    //     "command": "vimAtHome.addToCache",
    //     "when": "editorTextFocus"
    // },
    // {
    //     "key": "ctrl+v",
    //     "command": "vimAtHome.pasteTop",
    //     "when": "editorTextFocus && vimAtHome.mode == 'COMMAND' || vimAtHome.mode == 'EXTEND'"
    // },
    {
        "key": "alt+c",
        "command": "vimAtHome.parseToCache",
        "when": "editorTextFocus"
    },
    {
        "key": "alt+v",
        "command": "vimAtHome.pasteFromCache",
        "when": "editorTextFocus"
    },
    
    {
        "key": "alt+v",
        "command": "vimAtHome.pasteFromCache",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+f21",
        "command": "vimAtHome.changeToExtendMode",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+shift+f6",
        "command": "vimAtHome.openSubjectMenu",
        "when": "editorTextFocus"
    }


]

```
