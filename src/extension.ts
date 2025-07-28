import * as vscode from 'vscode';
import { State } from './state';

export function activate(context: vscode.ExtensionContext) {
    const state = new State();

    const typeHandler = vscode.commands.registerTextEditorCommand('type', (_textEditor, _edit, args) => {
        if (state.normalMode) {
            return;
        }
        
        vscode.commands.executeCommand('default:type', args);
    });

    const enterInsertCmd = vscode.commands.registerCommand('modelaire.enterInsertMode', () => {
        state.enterInsertMode();
    });

    const enterNormalCmd = vscode.commands.registerCommand('modelaire.enterNormalMode', () => {
        state.enterNormalMode();
    });

    context.subscriptions.push(
        enterInsertCmd,
        enterNormalCmd,
        state.statusBarItem,
        typeHandler
    );
}

export function deactivate() {
    State.resetCursorStyle();
}