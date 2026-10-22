#!/usr/bin/env node
// Github Codesearch for Zed: opens a Github search for the selected text in the default browser.
// Run from a Zed task, which provides the selection via $ZED_SELECTED_TEXT.
const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawn } = require("child_process");

const DEFAULT_CONFIG = {
    wrapText: false,
    trimText: false,
    baseUrl: "https://github.com/search",
    type: "code",
    organization: "",
    repositories: [],
    languages: [],
};

function generate_query(keyword, settings) {
    if (!settings?.length) return "";

    const joined_settings = settings
        .map((setting) => `${keyword}:${setting}`)
        .join("+OR+");
    return `(${joined_settings})+`;
}

function build_url(text, configs) {
    // Get search text
    let search_text = configs.trimText ? text.trim() : text;
    search_text = configs.wrapText ? `"${search_text}"` : search_text;
    // Get type params
    const type = configs.type;
    // Get query settings: org, languages, repositories
    const org = configs.organization;
    const org_query = org ? `org%3A${org}+` : "";
    const language_query = generate_query("language", configs.languages);
    const repositories = configs.repositories.map((repo) =>
        org && !repo.includes("/") ? `${org}/${repo}` : repo,
    );
    const repo_query = generate_query("repo", repositories);
    // Get base URL params
    let base_url = configs.baseUrl ? configs.baseUrl : DEFAULT_CONFIG.baseUrl;
    if (base_url.endsWith("?")) base_url = base_url.slice(0, -1);
    base_url = type ? `${base_url}?type=${type}&` : `${base_url}?`;
    // Build final URL
    return `${base_url}q=${org_query}${repo_query}${language_query}${encodeURIComponent(search_text)}`;
}

function load_config() {
    const config_path =
        process.env.GITHUB_CODESEARCH_CONFIG ||
        path.join(os.homedir(), ".config", "zed", "github-codesearch.json");
    if (!fs.existsSync(config_path)) return DEFAULT_CONFIG;
    return {
        ...DEFAULT_CONFIG,
        ...JSON.parse(fs.readFileSync(config_path, "utf8")),
    };
}

function open_external(url) {
    const [cmd, args] =
        process.platform === "darwin"
            ? ["open", [url]]
            : process.platform === "win32"
              ? ["rundll32", ["url.dll,FileProtocolHandler", url]]
              : ["xdg-open", [url]];
    spawn(cmd, args, { detached: true, stdio: "ignore" }).unref();
}

if (require.main === module) {
    const text = process.env.ZED_SELECTED_TEXT ?? process.argv[2] ?? "";
    open_external(build_url(text, load_config()));
}

module.exports = { generate_query, build_url, DEFAULT_CONFIG };
