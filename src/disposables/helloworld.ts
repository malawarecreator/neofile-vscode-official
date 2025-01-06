import * as vscode from "vscode";
export const helloWorldDisposable = vscode.commands.registerCommand(
  "neofile.helloWorld",
  () => {
    vscode.window.showInformationMessage("Hello World from neofile!");
  }
);