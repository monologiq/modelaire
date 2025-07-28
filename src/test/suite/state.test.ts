import * as assert from 'assert';
import * as vscode from 'vscode';
import { State } from '../../state';

suite('State Test Suite', () => {
    let state: State;

    setup(() => {
        state = new State();
    });

    teardown(() => {
        state.dispose();
    });

    test('Initial state is normal mode', () => {
        assert.strictEqual(state.normalMode, true);
    });

    test('Enter insert mode', () => {
        state.enterInsertMode();
        assert.strictEqual(state.normalMode, false);
    });

    test('Enter normal mode', () => {
        state.enterInsertMode();
        state.enterNormalMode();
        assert.strictEqual(state.normalMode, true);
    });

    test('Mode transitions', () => {
        assert.strictEqual(state.normalMode, true);
        
        state.enterInsertMode();
        assert.strictEqual(state.normalMode, false);
        
        state.enterNormalMode();
        assert.strictEqual(state.normalMode, true);
    });

    test('Status bar item exists', () => {
        assert.ok(state.statusBarItem);
    });
});