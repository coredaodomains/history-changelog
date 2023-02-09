# history-changelog

Coredomains version changelog utilities

This package has a CLI gen-changelog and an API.

# Installation

```bash
yarn add --dev @coredomains/gen-changelog
# Or
npm install --save-dev @coredomains/gen-changelog
```

# CLI Usage

- To update the 'Unreleased' section of the changelog:

npx @coredomains/gen-changelog update

- To update the current release section of the changelog:

npx @coredomains/gen-changelog update --rc

# Validate

To validate the changelog:

npx @coredomains/gen-changelog validate

To validate the changelog in a release candidate environment:

npx @coredomains/gen-changelog validate --rc
