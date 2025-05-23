# Create C++ Class

A Visual Studio Code extension that helps you quickly create new C++ classes with header and implementation files.

## Features

- Create new C++ classes with a single command
- Generates both header (.hpp) and implementation (.cpp) files
- Available through command palette or context menu
- Automatically creates include and src directories if they don't exist

## Usage

1. Using Command Palette:
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS)
   - Type "Create C++ Class" and select it
   - Enter the class name when prompted

2. Using Context Menu:
   - Right-click on any folder in the explorer
   - Select "Create C++ Class"
   - Enter the class name when prompted

## Generated Files

The extension will create:
- A header file (`ClassName.hpp`) with the class declaration
- An implementation file (`ClassName.cpp`) with constructor and destructor implementations

## Requirements

- Visual Studio Code version 1.99.0 or higher

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: Enable/disable this extension.
* `myExtension.thing`: Set to `blah` to do something.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
