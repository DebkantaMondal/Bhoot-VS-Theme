
const vscode = require('vscode');

function activate(context) {
  const outputChannel = vscode.window.createOutputChannel("Bhoot Theme");

  const disposable = vscode.commands.registerCommand('bhoot.hi', () => {
    vscode.window.showInformationMessage('🟢 Bhoot Theme loaded successfully!');
    vscode.window.showWarningMessage('⚠️ This is a warning from Bhoot Themes.');
    vscode.window.showErrorMessage('❌ Theme loading encountered an error!');

    outputChannel.appendLine('🟢 [SUCCESS] Theme initialized.');
    outputChannel.appendLine('🟡 [WARNING] Some settings may be deprecated.');
    outputChannel.appendLine('🔴 [ERROR] Failed to apply font configuration.');

    outputChannel.show(true);
  });

  context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {}
exports.deactivate = deactivate;
