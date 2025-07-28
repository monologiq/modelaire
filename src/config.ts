import * as vscode from "vscode";

export interface ModelaireConfig {
    enterInsertKey: string;
    enterNormalKey: string;
}

export function getModelaireConfig(): ModelaireConfig {
    const config = vscode.workspace.getConfiguration("modelaire");

    return {
        enterInsertKey: config.get<string>("enterInterKey", "i"),
        enterNormalKey: config.get<string>("enterNormalKey", "Escape")
    };
}

export function onConfigurationChanged(callback: () => void): vscode.Disposable {
    return vscode.workspace.onDidChangeConfiguration(evt => {
        if (evt.affectsConfiguration("modelaire")) {
            callback();
        };
    });
}