# Github Codesearch extension for Visual Studio Code

This simple extension allows you to search for selected text from your VS Code editor in Github repositories.

The extension will **open a new tab in your default browser** with the search results for the highlighted text.

It is based on Github Search queries, whose official documentation can be found here: https://docs.github.com/en/search-github/searching-on-github

## Features

- Search for code in all Github repositories
- Possible to limit search scope to a specific organization, repositories or languages
- Hotkey support

## Keybindings

The default keybinding for the extension is:

- For Mac: `Cmd + Shift + Alt + F`
- For Windows: `Ctrl + Shift + Alt + F`

It is available when you have some text selected in the editor.

## Extension Settings

This extension contributes the following settings:

- `github-codesearch.wrap`:

  - **Type:** `boolean`
  - **Default:** `false`
  - **Description:** Wrap search text in quotes.

- `github-codesearch.type`:

  - **Type:** `string`
  - **Default:** `code`
  - **Description:** Search type. Possible values are `code`, `repositories`, `commits`, `issues`, `packages`, `topics`, `wikis`, `users`.

- `github-codesearch.organization`:

  - **Type:** `string`
  - **Default:** `None`
  - **Example:** `microsoft`
  - **Description:** Limit search to an organization.

- `github-codesearch.repositories`:

  - **Type:** `array`
  - **Default:** `None`
  - **Example:** `["microsoft/vscode", "vscode-python"]`
  - **Description:** Limit search to one or more repositories. If organization is set, the repository name should be enough. Otherwise, the full repository path with organization must be used.

- `github-codesearch.languages`:
  - **Type:** `array`
  - **Default:** `None`
  - **Example:** `["Python", "JavaScript"]`
  - **Description:** Limit search to one or more languages. The language names can be found on Github.

## Known Issues

None.

## Release Notes

### 0.0.2

Add more customizable settings.

### 0.0.1

Initial release of Github Codesearch.
