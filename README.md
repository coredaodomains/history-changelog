# history-changelog

Coredomains version changelog utilities

This package has a CLI rel-changelog and an API.

# Installation 

```bash 
yarn add --dev @coredomains/rel-changelog
# Or
npm install --save-dev @coredomains/rel-changelog
```

# CLI Usage

- To update the 'Unreleased' section of the changelog:

npx @coredomains/rel-changelog update

- To update the current release section of the changelog:

npx @coredomains/rel-changelog update --rc

# Validate

To validate the changelog:

npx @coredomains/rel-changelog validate

To validate the changelog in a release candidate environment:

npx @coredomains/rel-changelog validate --rc