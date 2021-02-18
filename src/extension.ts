import * as vscode from 'vscode';
import { MimeTypeContentProvider, MimeTypeKernelProvider } from './mimeTypeNotebook';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vscode-notebook-testbed" is now active!');

	context.subscriptions.push(vscode.commands.registerCommand('testbed.print', async () => {
		console.log(vscode.window.activeNotebookEditor);
	}));

	let _counter = 0;

	context.subscriptions.push(vscode.commands.registerCommand('testbed.streamoutput', async () => {
		if (vscode.window.activeNotebookEditor) {
			const editor = vscode.window.activeNotebookEditor;
			const document = editor.document;
			const activeCell = editor.selection;

			if (activeCell) {
				const edit = new vscode.WorkspaceEdit();

				if (activeCell.outputs.length && activeCell.outputs.find(op => !!op.outputs.find(opit => opit.mime === 'application/x.notebook.stream'))) {
					const output = activeCell.outputs.find(op => !!op.outputs.find(opit => opit.mime === 'application/x.notebook.stream'))
					edit.appendNotebookCellOutputItems(document.uri, activeCell.index, output!.id, [
						new vscode.NotebookCellOutputItem('application/x.notebook.stream', _counter++)
					]);
				} else {
					edit.appendNotebookCellOutput(document.uri, activeCell.index, [
						new vscode.NotebookCellOutput([new vscode.NotebookCellOutputItem('application/x.notebook.stream', _counter++)])
					])
				}

				await vscode.workspace.applyEdit(edit);
			}
		}
	}));

	context.subscriptions.push(vscode.notebook.registerNotebookContentProvider('mimetype-test', new MimeTypeContentProvider()));
	context.subscriptions.push(vscode.notebook.registerNotebookKernelProvider({ viewType: 'mimetype-test' }, new MimeTypeKernelProvider()));
 }

// this method is called when your extension is deactivated
export function deactivate() {}
