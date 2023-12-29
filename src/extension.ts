// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

export function generate_query(keyword: string, settings?: Array<string>): string {
  if (!settings?.length) return "";

  const joined_settings = settings.map((setting: string) => `${keyword}:${setting}`).join("+OR+");
  return `(${joined_settings})+`;
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Extension "github-codesearch" is active');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand("github-codesearch.codeSearch", () => {
    // The code you place here will be executed every time your command is executed
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const configs = vscode.workspace.getConfiguration("github-codesearch");
    // Get search text
    const selectionRange = new vscode.Range(editor.selection.start, editor.selection.end);
    let search_text = editor.document.getText(selectionRange);
    search_text = configs.trimText ? search_text.trim() : search_text;
    search_text = configs.wrapText ? `"${search_text}"` : search_text;
    // Get type params
    const type = configs.get("type", "code");
    // Get query settings: org, languages, repositories
    const org = configs.organization;
    const org_query = org ? `org%3A${org}+` : "";
    const language_query = generate_query("language", configs.languages);
    const repositories = configs.repositories.map((repo: string) =>
      org && !repo.includes("/") ? `${org}/${repo}` : repo
    );
    const repo_query = generate_query("repo", repositories);
    // Get base URL params
    const default_base_url = `https://github.com/search`;
    let base_url = configs.baseUrl ? configs.baseUrl : default_base_url;
    if (base_url.endsWith("?")) base_url = base_url.slice(0, -1);
    if (type) base_url = `${base_url}?type=${type}&`;
    // Build final URL
    const final_url = vscode.Uri.parse(`${base_url}q=${org_query}${repo_query}${language_query}${search_text}`);
    vscode.env.openExternal(final_url);
  });

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
