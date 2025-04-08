// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "create-cpp-class" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const createClassDisposable = vscode.commands.registerCommand('create-cpp-class.createClass', async (uri?: vscode.Uri) => {
		// Get the class name from the user
		const className = await vscode.window.showInputBox({
			prompt: 'Enter the class name',
			placeHolder: 'MyClass'
		});

		if (!className) {
			return;
		}

		// Determine the target directory
		let targetDir: string;
		if (uri) {
			// If called from context menu, use the selected folder
			targetDir = uri.fsPath;
		} else {
			// If called from command palette, use workspace root
			const workspaceFolders = vscode.workspace.workspaceFolders;
			if (!workspaceFolders || workspaceFolders.length === 0) {
				vscode.window.showErrorMessage('No workspace folder found');
				return;
			}
			targetDir = workspaceFolders[0].uri.fsPath;
		}

		
		// Create header file
		const headerContent = `#pragma once

class ${className} {
public:
    ${className}();
    ~${className}();

private:
    // Add your private members here
};`;

		// Create implementation file
		const implContent = `#include "${className}.hpp"

${className}::${className}() {
    // Constructor implementation
}

${className}::~${className}() {
    // Destructor implementation
}`;

		// Write files
		const headerPath = path.join(targetDir, `${className}.hpp`);
		const implPath = path.join(targetDir, `${className}.cpp`);

		try {
			fs.writeFileSync(headerPath, headerContent);
			fs.writeFileSync(implPath, implContent);
			vscode.window.showInformationMessage(`Created ${className} class files successfully!`);
		} catch (error) {
			vscode.window.showErrorMessage(`Failed to create class files: ${error}`);
		}
	});

	context.subscriptions.push(createClassDisposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
