import * as vscode from "vscode";
import { exec } from "child_process";
export const vfDisposable = vscode.commands.registerCommand(
  "neofile.vf",
  async () => {
    const filename = await vscode.window.showInputBox({
      placeHolder: "Enter the filename",
    });
    if (filename) {
      exec(`neofile vf ${filename}`, (error, stdout, stderr) => {
        if (error) {
          vscode.window.showErrorMessage(`Error: ${error.message}`);
          console.error(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          vscode.window.showErrorMessage(`Stderr: ${stderr}`);
          console.error(`Stderr: ${stderr}`);

          return;
        }
        vscode.window.showInformationMessage(`Output: ${stdout}`);
        console.log(`Output: ${stdout}`);
      });
    }
  }
);
