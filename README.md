<p align="center">
  <a href="https://fingerprint.com">
    <picture>
     <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/fingerprintjs/library-template-typescript/main/resources/logo_light.svg" />
     <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/fingerprintjs/library-template-typescript/main/resources/logo_dark.svg" />
     <img src="https://raw.githubusercontent.com/fingerprintjs/library-template-typescript/main/resources/logo_dark.svg" alt="Fingerprint logo" width="312px" />
   </picture>
  </a>
</p>
<p align="center">
  <a href="https://github.com/fingerprintjs/library-template-typescript/actions/workflows/build.yml">
    <img src="https://github.com/fingerprintjs/library-template-typescript/actions/workflows/build.yml/badge.svg" alt="Build status">
  </a>
  <a href="https://fingerprintjs.github.io/library-template-typescript/coverage/">
    <img src="https://fingerprintjs.github.io/library-template-typescript/coverage/badges.svg" alt="coverage">
  </a>
  <a href="https://github.com/fingerprintjs/library-template-typescript/actions/workflows/release.yml">
    <img src="https://github.com/fingerprintjs/library-template-typescript/actions/workflows/release.yml/badge.svg" alt="Release status">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/:license-mit-blue.svg" alt="MIT license">
  </a>
  <a href="https://discord.gg/39EpE2neBg">
    <img src="https://img.shields.io/discord/852099967190433792?style=logo&label=Discord&logo=Discord&logoColor=white" alt="Discord server">
  </a>
   <a href="https://fingerprintjs.github.io/library-template-typescript/docs/">
     <img src="https://img.shields.io/badge/-Documentation-green" alt="Documentation">
   </a>
</p>
This is template repository for creating TypeScript libraries by FingerprintJS team.

## Features
* [Typescript](https://www.typescriptlang.org/) support
* [Jest](https://jestjs.io/) setup
* Lint using [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/) integration
* Docs generation using [typedoc](https://typedoc.org/) with deployment to Github Pages
* Automated releases using [semantic-release](https://github.com/semantic-release/semantic-release)
* Conventional commits with commit lint using git hooks

## Quick start

1. Clone this repository, remove `.git` folder and call `git init` / Use `Use this template` GitHub button
2. Setup project specific fields in package.json
3. Setup `artifactName` and other build properties in `rollup.config.js`
4. If your project emits `.d.ts` typings, set correct path in `package.json` for `test:dts` command or remove it 
5. Use `src` folder to organize your code and put tests in `__test__` folder
6. If you want isolated run you can use Docker
7. Push your repo, check that GitHub actions works
8. Add badges
9. You are awesome!

## Best practice

### Choosing name for repository

Check [FingerprintJS naming conventions](https://github.com/fingerprintjs/home/wiki/FingerprintJS-Naming-Conventions)

### Team best practise

Described in [Integrations and repositories best practices](https://github.com/fingerprintjs/home/wiki/Integrations-and-repositories-best-practices)

### Publish to npm

Publishing to NPM is automated thanks to [semantic-release](https://github.com/semantic-release/semantic-release).
On every push to `main` branch it will analyze commits and release new version accordingly to changes.

To set it up:

1. Add `NPM_AUTH_TOKEN` to the repository secrets area
2. Add `GH_RELEASE_TOKEN` to the repository secrets area, it should have following permissions: `public_repo`, or `repo` if your repository is private.
   Thanks to that, you will get automatic releases on GitHub, comments on issues and more!
3. Package will publish automatically to NPM when there are relevant changes
4. You are awesome!

### Preparing product for release
Just follow [checklist for publishing new integration](https://github.com/fingerprintjs/home/wiki/Checklist-for-publishing-new-integration)
