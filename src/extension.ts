import * as vscode from "vscode";
import { identifyDisposable } from "./disposables/identify";
import { helloWorldDisposable } from "./disposables/helloworld";
import { vfDisposable } from "./disposables/vf";
export function activate(context: vscode.ExtensionContext) {
  console.log("Neofile extension is now active!");

  context.subscriptions.push(helloWorldDisposable);
  context.subscriptions.push(identifyDisposable);
  context.subscriptions.push(vfDisposable);
}

export function deactivate() {
  console.log("deactivated");
}
