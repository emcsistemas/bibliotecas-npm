# EMC Sistemas ESLint config

[![npm latest package](https://img.shields.io/npm/v/@emcsistemas/eslint-config/latest.svg)](https://www.npmjs.com/package/@emcsistemas/eslint-config)
[![npm downloads](https://img.shields.io/npm/dm/@emcsistemas/eslint-config.svg)](https://npm-stat.com/charts.html?package=@emcsistemas/eslint-config)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/emcsistemas/bibliotecas-npm/blob/4a3c9e66ebf043c80b428829457d2d7374c6b744/LICENCE)

## 1. Utilização

- Instalação das dependências

```sh
npm i -D eslint @emcsistemas/eslint-config
```
ou
```sh
yarn i -D eslint @emcsistemas/eslint-config
```
ou
```sh
pnpm i -D eslint @emcsistemas/eslint-config
```

## 2. Configuração

- Crie o arquivo `.eslintrc.json` na raiz do projeto e adicione o seguinte conteúdo:

```
{
  "extends": "@emcsistemas/eslint-config/react"
  // "extends": "@emcsistemas/eslint-config/next"
  // "extends": "@emcsistemas/eslint-config/node"
}
```

- Crie também o arquivo `.eslintignore` com o seguinte conteúdo:

```
node_modules
build
```

## 3. Contribuição

Sinta-se à vontade para enviar um PR se quiser ajudar!

## 4. Licença

Licenciado sob a licença MIT, Copyright © 2023 EMC Sistemas Ltda. Veja [LICENÇA](https://github.com/emcsistemas/bibliotecas-npm/blob/4a3c9e66ebf043c80b428829457d2d7374c6b744/LICENCE) para mais informações.