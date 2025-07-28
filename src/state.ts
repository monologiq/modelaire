import * as vscode from 'vscode';

export class State {
    private _normalMode: boolean = true;
    private _statusBarItem: vscode.StatusBarItem;

    constructor() {
        this._statusBarItem = vscode.window.createStatusBarItem(
            vscode.StatusBarAlignment.Left,
            100
        );
        this.updateStatus();
    }

    get normalMode(): boolean {
        return this._normalMode;
    }

    get statusBarItem(): vscode.StatusBarItem {
        return this._statusBarItem;
    }

    private updateStatus(): void {
        this._statusBarItem.text = this._normalMode ? '$(circle-filled) NORMAL' : '$(edit) INSERT';
        this._statusBarItem.backgroundColor = this._normalMode
            ? new vscode.ThemeColor('statusBarItem.prominentBackground')
            : undefined;
        this._statusBarItem.show();

        const config = vscode.workspace.getConfiguration('editor');
        const cursorStyle = this._normalMode ? 'block' : 'line';
        config.update('cursorStyle', cursorStyle, vscode.ConfigurationTarget.Global);

        vscode.commands.executeCommand('setContext', 'modelaire.normal', this._normalMode);
    }

    enterInsertMode(): void {
        this._normalMode = false;
        this.updateStatus();
    }

    enterNormalMode(): void {
        this._normalMode = true;
        this.updateStatus();
    }

    dispose(): void {
        this._statusBarItem.dispose();
    }

    static resetCursorStyle(): void {
        const config = vscode.workspace.getConfiguration('editor');
        config.update('cursorStyle', 'line', vscode.ConfigurationTarget.Global);
    }
}