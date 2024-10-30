# eslint-plugin-forbid-console 🚫

[![Version](https://img.shields.io/npm/v/eslint-plugin-forbid-console)](https://www.npmjs.com/package/eslint-plugin-forbid-console)

Forbid usage of console + optionally display custom message.

Can be helpful if you want to force some custom logger to be used, for instance.

## Installation

Via npm:

```bash
npm i eslint-plugin-forbid-console --save-dev
```

Via yarn:

```bash
yarn add -D eslint-plugin-forbid-console
```

## Configuration / Usage

Depending on how you configured your eslint instance, the following configuration might look a bit different.

For example using a json format would require the keys to be in quotes etc.

```javascript
// .eslintrc.js

module.exports = {
  // ...
  plugins: [
    "forbid-console",
    // ... maybe other plugins here ...
  ],
  rules: {
    "forbid-console/check": [
      "error",
      {
        ignoreLevels: ["error", "warn"],
        customMessage: "Please use custom logger instead.",
      },
    ],
    // ... maybe other rules here ...
  },
};
```

## If you enjoy using this...

<a href="https://www.buymeacoffee.com/maks_io" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 48px !important;" ></a>
