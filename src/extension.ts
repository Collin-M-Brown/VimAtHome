import * as vscode from "vscode";
import { registeredCommands } from "./commands";
import { loadConfig } from "./config";
import VimAtHomeManager from "./VimAtHomeManager";


export function activate(context: vscode.ExtensionContext) {
    const config = loadConfig();
    const manager = new VimAtHomeManager(config);
    const editor = vscode.window.activeTextEditor;
    
    if (editor) {
        manager.changeEditor(editor);
    }

    vscode.window.onDidChangeActiveTextEditor(async (editor) => {
        await manager.changeEditor(editor);
    });

    vscode.window.onDidChangeTextEditorSelection(async (e) => {
        await manager.onDidChangeTextEditorSelection(e);
    });
    
    vscode.workspace.onDidChangeConfiguration(event => {
        if (event.affectsConfiguration("vimAtHome")) {
            loadConfig();
        }
    });

    for (const command of registeredCommands) {
        context.subscriptions.push(
            vscode.commands.registerCommand(command.id, (...args) =>
                command.execute(manager, ...args)
            )
        );
    }

}
