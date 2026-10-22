const test = require("node:test");
const assert = require("node:assert");
const {
    generate_query,
    build_url,
    DEFAULT_CONFIG,
} = require("./github-codesearch");

test("generate_query", () => {
    assert.strictEqual(generate_query("language", []), "");
    assert.strictEqual(
        generate_query("language", ["Python", "Go"]),
        "(language:Python+OR+language:Go)+",
    );
});

test("default config", () => {
    assert.strictEqual(
        build_url("foo", DEFAULT_CONFIG),
        "https://github.com/search?type=code&q=foo",
    );
});

test("trim and wrap text", () => {
    const url = build_url("  foo bar ", {
        ...DEFAULT_CONFIG,
        trimText: true,
        wrapText: true,
    });
    assert.strictEqual(
        url,
        "https://github.com/search?type=code&q=%22foo%20bar%22",
    );
});

test("org, repositories and languages", () => {
    const url = build_url("foo", {
        ...DEFAULT_CONFIG,
        organization: "microsoft",
        repositories: ["vscode", "other/repo"],
        languages: ["Python"],
    });
    assert.strictEqual(
        url,
        "https://github.com/search?type=code&q=org%3Amicrosoft+(repo:microsoft/vscode+OR+repo:other/repo)+(language:Python)+foo",
    );
});

test("custom base url and empty type", () => {
    const url = build_url("foo", {
        ...DEFAULT_CONFIG,
        baseUrl: "https://ghe.example.com/search?",
        type: "",
    });
    assert.strictEqual(url, "https://ghe.example.com/search?q=foo");
});
