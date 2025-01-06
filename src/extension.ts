// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { exec } from "child_process";
import {identifyDisposable, helloWorldDisposable} from "./disposables";
export function activate(context: vscode.ExtensionContext) {
  console.log("Neofile extension is now active!");

  context.subscriptions.push(helloWorldDisposable);
  context.subscriptions.push(identifyDisposable);
}

// This method is called when your extension is deactivated
export function deactivate() {
  console.log("deactivated");
}
