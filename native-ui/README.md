# 📱 Native UI

[![npm latest package](https://img.shields.io/npm/v/@emcsistemas/native-ui/latest.svg)](https://www.npmjs.com/package/@emcsistemas/native-ui)
[![npm downloads](https://img.shields.io/npm/dm/@emcsistemas/native-ui.svg)](https://npm-stat.com/charts.html?package=@emcsistemas/native-ui)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/emcsistemas/bibliotecas-npm/blob/4a3c9e66ebf043c80b428829457d2d7374c6b744/LICENCE)

## Biblioteca de componentes react native para construção e estilização de interfaces

[**EMC Sistemas Ltda**](https://emcsistemas.com.br/)

## 1. Pré-requisitos

- React Native 
- Expo
- [React Navigation](https://reactnavigation.org/docs/getting-started/)

## 2. Dependências (outras bibliotecas)

- expo-font
- @expo-google-fonts/roboto (Roboto_400Regular, Roboto_500Medium e Roboto_700Bold)
- expo-haptics
- react-native-safe-area-context
- react-native-calendars
- date-fns
- react-native-root-toast
- react-native-reanimated
- react-native-gesture-handler
- lottie-react-native

## 3. Instalação das dependências

```bash
npm i @emcsistemas/native-ui react-native-calendars date-fns react-native-root-toast
```
```bash
npx expo install expo-font @expo-google-fonts/roboto expo-haptics react-native-safe-area-context
```
```bash
npx expo install react-native-reanimated react-native-gesture-handler lottie-react-native
```
- Incluir a linha ``react-native-reanimated/plugin`` nos plugins do arquivo ``babel.config.js``

## 4. O que está incluído?

- **EMCHeader**: cabeçalho padrão com logomarca utilizado geralmente na tela ```Home```
- **EMCHeaderSimple**: cabeçalho padrão simplificado sem logomarca utilizado geralmente nas demais telas
- **EMCHeaderResponse**: cabeçalho utilizado em telas exibidas após um envio de documento fiscal ao backend
- **EMCBox**: implementa uma ```View``` nativa
- **EMCBoxSafe**: implementa uma ```View``` nativa dentro de uma ```SafeAreaView```
- **EMCVStack**: implementa uma ```View``` nativa
- **EMCVStackSafe**: implementa uma ```View``` nativa dentro de uma ```SafeAreaView```
- **EMCHStack**: implementa uma ```View``` nativa com orientação horizontal
- **EMCHStackSafe**: implementa uma ```View``` nativa com orientação horizontal dentro de uma ```SafeAreaView```
- **EMCCenter**: implementa uma ```View``` com orientação centralizada
- **EMCCenterSafe**: implementa uma ```View``` com orientação centralizada dentro de uma ```SafeAreaView```
- **EMCDivider**: linha fina horizontal para divisão de itens na tela
- **EMCButton**: implementa um ```Pressed``` nativo com propriedades personalizadas
- **EMCBoletoButton**: exibe um botão personalido para visualização de arquivo de boletos bancários
- **EMCWhatsAppButton**: exibe um botão personalido para envio de mensagem por whatsapp
- **EMCButtonMenu**: botão padrão de opções utilizado geralmente na tela ```Home``` dos apps
- **EMCWhatsAppNumber**: exibe um caixa de diálogo para informar o número de telefone do whatsapp de destino
- **EMCCircularButton**: botão circular flutuante com ícone
- **EMCScrollView**: implementa uma ```ScrollView``` nativa sem barra de rolagem na vertical
- **EMCText**: implementa um ```Text``` nativo
- **EMCHeadText**: Exibe um texto em negrito utilizado geralmente em telas de login
- **EMCTextArea**: implementa um ```TextInput``` nativo com suporte a múltiplas linhas
- **EMCTextInput**: implementa um ```TextInput``` nativo
- **EMCFakeInput**: componente que imita um ```TextInput``` desabilitado. Somente para exibição de informação.
- **EMCIcon**: exibe na tela um ícone de qualquer família de ícones da biblioteca ```@expo/vector-icons```
- **EMCMaskedInput**: implementa um ```TextInput``` nativo com máscara automática
- **EMCMessage**: exibe uma mensagem ao usuário utilizando a função nativa ```Alert.alert```
- **EMCDialog**: exibe uma caixa de mensagem com a opção de incluir um campo para solicitação de dados
- **EMCSpinner**: implementa um ```ActivityIndicator``` nativo
- **EMCSafeArea**: implementa uma ```SafeAreaView```
- **EMCDecimalKeyboard**: teclado customizado para digitação de valores numéricos
- **EMCBackground**: background utilizado em todas as telas
- **EMCCalendar**: calendário estilizado utilizando a lib ```react-native-calendars```
- **showToast**: função que mostra uma mensagem temporária no formato ```Toast```
- **EMCToastModal**: componente que exibe um toast como na função ```showToast``` para utilização em modals sem transparência
- **EMCDropDown**: exibe um fake dropdown (deve ser implementado um modal para exibir a lista de itens)
- **EMCAvatar**: exibe uma view de avatar em formato circular com a imagem passada
- **EMCLogo**: exibe uma logomarca passada como parâmetro (base64) ou a logo da EMC Sistemas caso a base64 não seja passada
- **EMCSwitch**: implementa um ```Switch``` nativo
- **EMCDiscountSwitch**: exibe um switch personalizado para seleção do tipo de desconto (percentual ou valor)
- **EMCWait**: exibe um modal com fundo escuro e semi-transparente para indicar processamento de alguma operação
- **EMCBannerDemo**: banner que é exibido ao entrar no app quando se trata de um cliente de demonstração

## 5. Tema

- **Colors**: padrão de cores utilizado pela empresa
- **FontSizes**: configurações de tamanhos de fontes utilizadas pela empresa
- **Sizes**: definições de tamanhos utilizados pela empresa

## 6. Contribuição

Sinta-se à vontade para enviar um PR se quiser ajudar!

## 7. Licença

Licenciado sob a licença MIT, Copyright © 2023 EMC Sistemas Ltda. Veja [LICENÇA](https://github.com/emcsistemas/bibliotecas-npm/blob/4a3c9e66ebf043c80b428829457d2d7374c6b744/LICENCE) para mais informações.