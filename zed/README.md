# Github Codesearch for Zed

Same feature as the VS Code extension: search the selected text on Github in your default browser, with a hotkey.

Zed's extension API cannot register editor commands or open a browser, so this is implemented as a [Zed task](https://zed.dev/docs/tasks) bound to a key. Requires [Node.js](https://nodejs.org).

## Installation

1. Copy `github-codesearch.js` to `~/.config/zed/github-codesearch.js` (on Windows: `%APPDATA%\Zed\github-codesearch.js`).
2. Add the task from `tasks.json` to your global tasks (`zed: open tasks`). Adjust the script path in `args` if needed.
3. Add the bindings from `keymap.json` to your keymap (`zed: open keymap`).
4. Optional: copy `config.example.json` to `~/.config/zed/github-codesearch.json` and edit it.

## Keybindings

- For Mac: `Cmd + Shift + Alt + F`
- For Windows / Linux: `Ctrl + Shift + Alt + F`

The task can also be launched via `task: spawn` → `Github Codesearch`.

## Settings

Settings are read from `~/.config/zed/github-codesearch.json`, or from the path in the `GITHUB_CODESEARCH_CONFIG` environment variable. All keys are optional and match the VS Code extension settings (without the `github-codesearch.` prefix):

| Key            | Type       | Default                     | Description                                                                            |
| -------------- | ---------- | --------------------------- | -------------------------------------------------------------------------------------- |
| `wrapText`     | `boolean`  | `false`                     | Wrap search text in quotes.                                                            |
| `trimText`     | `boolean`  | `false`                     | Trim whitespaces from search text.                                                     |
| `baseUrl`      | `string`   | `https://github.com/search` | Base URL to launch search. Useful for Github Enterprise.                               |
| `type`         | `string`   | `code`                      | `code`, `repositories`, `commits`, `issues`, `packages`, `topics`, `wikis` or `users`. |
| `organization` | `string`   | `""`                        | Limit search to an organization.                                                       |
| `repositories` | `string[]` | `[]`                        | Limit search to repositories. Repo name is enough if `organization` is set.            |
| `languages`    | `string[]` | `[]`                        | Limit search to languages, e.g. `["Python", "JavaScript"]`.                            |

## Tests

```sh
node --test
```
