# Asset Deployment

## Demos

- Show Asset Deployment
- Explain Web Pack Bundle Analyzer
- Explain Packaging Metadata
- Explain Updating

## Readings

[SharePoint solution packaging](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/basics/notes-on-solution-packaging)

## Updating SPFx

Find outdated Packages:

```
npm outdated
```

![npm-outdated](_images/npm-outdated.jpg)

Update Package

```
npm i -s @microsoft/sp-build-web@version
....
```

Update Generator

```
npm install -g @microsoft/generator-sharepoint@latest
```

Updating can also be done using [CLI for Microsoft 365](https://pnp.github.io/cli-microsoft365/cmd/spfx/project/project-upgrade/):

```
m365 spfx project upgrade --toVersion 1.5.0 --output md > "upgrade-report.md"
```
