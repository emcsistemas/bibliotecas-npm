import React, { forwardRef } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { styles, makeBaseMaskedInputStyle } from '../../styles/styles'
import { CustomTextInputProps } from '../../styles/ui-components.types'
import Box from '../Box/Box'
import {
  INPUT_MASK_TYPES,
  inputMaskCEP,
  inputMaskCNPJ,
  inputMaskCPF,
  inputMaskCPFCNPJ,
  inputMaskCurrency,
  inputMaskNumbers,
  inputMaskPhone,
} from '../../util/util.masks'
import { Colors } from 'react-native/Libraries/NewAppScreen'

type MaskedInputProps = CustomTextInputProps & {
  maskType?: INPUT_MASK_TYPES
  onChangeValue(value: string): void
}

const MaskedInput = (props: MaskedInputProps, ref: any) => {
    const inputStyles = StyleSheet.compose(
      styles.textInput,
      makeBaseMaskedInputStyle(props),
    )

    function handleChangeText(value: string) {
      if (props.maskType) {
        switch (props.maskType) {
          case 'cep':
            value = inputMaskCEP(value)
            break
          case 'cnpj':
            value = inputMaskCNPJ(value)
            break
          case 'cpf':
            value = inputMaskCPF(value)
            break
          case 'cpfcnpj':
            value = inputMaskCPFCNPJ(value)
            break
          case 'currency':
            value = inputMaskCurrency(value, false)
            break
          case 'numbers':
            value = inputMaskNumbers(value)
            break
          case 'telephone':
            value = inputMaskPhone(value)
            break
        }
        props.onChangeValue(value)
      } else {
        props.onChangeValue(value)
      }
    }

    return (
      <Box w="full">
        <TextInput
          ref={ref || undefined}
          style={inputStyles}
          numberOfLines={1}
          autoCorrect={false}
          clearButtonMode={props.noClear ? 'never' : 'always'}
          autoComplete={props.autoCompleteType}
          cursorColor={Colors.cursor}
          selectionColor={undefined}
          editable={!props.isDisabled && !props.isInfo}
          autoCapitalize="none"
          keyboardType="number-pad"
          onChangeText={(value) => handleChangeText(value)}
          {...props}
        />
      </Box>
    )
  }

export default forwardRef<TextInput, MaskedInputProps>(MaskedInput)