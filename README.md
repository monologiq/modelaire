# Modelaire

A simple modal editing extension for VS Code that provides normal and insert modes without keybindings.

## Features

- **Normal Mode**: Navigate and execute commands without typing
- **Insert Mode**: Regular typing experience
- **Visual Status**: Clear mode indication in status bar
- **Cursor Styles**: Block cursor in normal mode, line cursor in insert mode
- **Selection Aware**: Extend selections while navigating in normal mode

## Usage

### Mode Switching

- Press `i` in normal mode to enter insert mode
- Press `Escape` in insert mode to return to normal mode

### Navigation (Normal Mode)

Add these keybindings to your `keybindings.json` for basic navigation:

```json
[
  {
    "key": "j",
    "command": "cursorDownSelect",
    "when": "modelaire.normal && editorTextFocus && editorHasSelection"
  },
  {
    "key": "j",
    "command": "cursorDown",
    "when": "modelaire.normal && editorTextFocus && !editorHasSelection"
  },
  {
    "key": "k",
    "command": "cursorUpSelect", 
    "when": "modelaire.normal && editorTextFocus && editorHasSelection"
  },
  {
    "key": "k",
    "command": "cursorUp",
    "when": "modelaire.normal && editorTextFocus && !editorHasSelection"
  },
  {
    "key": "h",
    "command": "cursorLeftSelect",
    "when": "modelaire.normal && editorTextFocus && editorHasSelection"
  },
  {
    "key": "h", 
    "command": "cursorLeft",
    "when": "modelaire.normal && editorTextFocus && !editorHasSelection"
  },
  {
    "key": "l",
    "command": "cursorRightSelect",
    "when": "modelaire.normal && editorTextFocus && editorHasSelection"
  },
  {
    "key": "l",
    "command": "cursorRight",
    "when": "modelaire.normal && editorTextFocus && !editorHasSelection"
  }
]
```

## Customization

You can customize the mode switching keys by overriding the default keybindings:

```json
[
  {
    "key": "ctrl+i",
    "command": "modelaire.enterInsertMode",
    "when": "modelaire.normal && editorTextFocus"
  },
  {
    "key": "ctrl+escape",
    "command": "modelaire.enterNormalMode", 
    "when": "!modelaire.normal && editorTextFocus"
  }
]
```

## Context Variables

The extension provides these context variables for your keybindings:

- `modelaire.normal`: True when in normal mode
- `!modelaire.normal`: True when in insert m
