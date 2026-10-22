# Change Log

All notable changes to the "github-codesearch" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]

## [0.1.0] - 2026-10-23

### Added

- Support for Zed editor using tasks

### Changed

- Minimum VS Code version is now 1.31, the first version with the `openExternal` API the extension relies on
- Replace ESLint with Biome for linting and formatting
- Update dev dependencies to latest versions (TypeScript 7, Mocha 12); development now requires Node 22+
- Reformat source code

### Fixed

- Malformed search URL (missing `?`) when search type is empty

## [0.0.4] - 2023-12-29

### Added

- Option to customize base URL for Github Enterprise

## [0.0.3] - 2023-11-16

### Added

- Option to trim whitespaces from search text

### Fixed

- Empty query when array settings are empty

## [0.0.2] - 2023-11-16

### Added

- More customization settings:
    - Search by Github type
    - Wrap search text in quotes
    - Limit search to one or more repositories
    - Limit search to one or more languages

## [0.0.1] - 2023-11-16

### Added

- Initial release
- Search with hotkey
- Customizable organization
- MIT license
- Github icon
