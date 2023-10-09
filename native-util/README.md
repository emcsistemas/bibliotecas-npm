# 🛠️ Native Util

[![npm latest package](https://img.shields.io/npm/v/@emcsistemas/native-util/latest.svg)](https://www.npmjs.com/package/@emcsistemas/native-util)
[![npm downloads](https://img.shields.io/npm/dm/@emcsistemas/native-util.svg)](https://npm-stat.com/charts.html?package=@emcsistemas/native-util)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/emcsistemas/bibliotecas-npm/blob/4a3c9e66ebf043c80b428829457d2d7374c6b744/LICENCE)

## Biblioteca de utilidades react native

[**EMC Sistemas Ltda**](https://emcsistemas.com.br/)

## 1. Instalação

```sh
npm i @emcsistemas/native-util
```
ou
```sh
yarn i @emcsistemas/native-util
```
ou
```sh
pnpm i @emcsistemas/native-util
```

## 2. Dependências

> Caso tenha utilizado um gerenciador de pacotes difente do npm no passo 2, utilize-o também no comando abaixo 

```sh
npm i expo-clipboard expo-constants expo-crypto expo-device expo-splash-screen date-fns react-native-format-currency
```

## 3. O que está incluído?

- **EMCGeneralConsts**: objeto com constantes gerais utilizadas nos apps da empresa
- **EMCRegexConsts**: objeto com constantes de expressão regular utilizadas na validação de dados
- **EMCDateUtils**: classe com funções para manipulação e validação de datas
- **EMCFormatUtils**: classe com funções para formatação de dados diversos
- **EMCGeneralUtils**: classe com funções gerais utilizadas nos apps da empresa
- **EMCMaskUtils**: classe com funções para aplicação de máscara em determinadas informações (telefone, cpf, etc)
- **EMCNetworkUtils**: classe com funções para manipulação de dados de rede
- **EMCNumberUtils**: classe com funções para manipulação de dados numéricos
- **EMCValidationUtils**: classe com funções para validação de dados diversos 

Exemplo de uso: 

```bash
import { EMCNetworkUtils } from '@emcsistemas/native-util'

if (EMCNetworkUtils.isInternalNetwork('http://www.meusite.com.br')){
  ...
}
```

## 4. Contribuição

Sinta-se à vontade para enviar um PR se quiser ajudar!

## 5. Licença

Licenciado sob a licença MIT, Copyright © 2023 EMC Sistemas Ltda. Veja [LICENÇA](https://github.com/emcsistemas/bibliotecas-npm/blob/4a3c9e66ebf043c80b428829457d2d7374c6b744/LICENCE) para mais informações.