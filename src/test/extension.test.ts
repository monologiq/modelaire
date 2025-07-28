import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Extension Integration Test Suite', () => {
    vscode.window.showInformationMessage('Start integration tests.');

    // Ensure the extension is activated before running tests
    suiteSetup(async () => {
        const extension = vscode.extensions.getExtension('monologiq.modelaire');
        if (extension && !extension.isActive) {
            await extension.activate();
        }

        await new Promise(resolve => setTimeout(resolve, 1000));
    });

    test('Extension activates without errors', async () => {
        const extension = vscode.extensions.getExtension('monologiq.modelaire');
        if (extension) {
            await extension.activate();
            assert.ok(extension.isActive);
        }
    });

    test('Commands are registered', async () => {
        const commands = await vscode.commands.getCommands();
        assert.ok(commands.includes('modelaire.enterInsertMode'));
        assert.ok(commands.includes('modelaire.enterNormalMode'));
    });
});