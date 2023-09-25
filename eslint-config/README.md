# EMC Sistemas ESLint config

## O que está incluído?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

1. Install the dependencies
```
npm i -D eslint @rocketseat/eslint-config
```

2. Create a `.eslintrc.json` file extending the config:
```
{
  "extends": "@rocketseat/eslint-config/react"
  // "extends": "@rocketseat/eslint-config/node"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.
