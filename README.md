# Github Codesearch extension for Visual Studio Code

This simple [extension](https://marketplace.visualstudio.com/items?itemName=ledkvu.github-codesearch) allows you to quickly search for selected text from your VS Code editor in Github repositories **using external browser**.

The extension will **open a new tab in your default browser** with the search results for the highlighted text. Needless to say, you need to be logged in beforehand for private repositories.

The extension is based on this new feature [Github code search](https://github.com/features/code-search).

## Features

- Search for code references in all Github repositories
- Possible to limit search scope to a specific organization, repositories or languages
- Hotkey support

## Keybindings

The default keybinding for the extension is:

- For Mac: `Cmd + Shift + Alt + F`
- For Windows: `Ctrl + Shift + Alt + F`

It is available when you have some text selected in the editor. It is also possible to modify the keybinding in the VS Code settings.

## Extension Settings

This extension contributes the following settings:

- `github-codesearch.wrapText`:

  - **Type:** `boolean`
  - **Default:** `false`
  - **Description:** Wrap search text in quotes.

- `github-codesearch.trimText`:

  - **Type:** `boolean`
  - **Default:** `false`
  - **Description:** Trim whitespaces from search text.

- `github-codesearch.baseUrl`:

  - **Type:** `string`
  - **Default:** `https://github.com/search`
  - **Description:** Base URL to launch search. Useful for Github Enterprise.

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
