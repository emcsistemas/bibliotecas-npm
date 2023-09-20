import React, { forwardRef } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { MAX_ACCESSIBILITY_MULTIPLIER } from '@global/consts.general'
import { CustomTextInputProps } from '@ui-components/ui-components.types'
import { styles, makeBaseMaskedInputStyle } from '../styles'
import {
  MASK_TYPES,
  maskCEP,
  maskCNPJ,
  maskCPF,
  maskCPFCNPJ,
  maskCurrency,
  maskNumbers,
  maskPhone,
} from '@global/util.masks'
import { Box } from '@ui-components/Box'

type MaskedInputProps = CustomTextInputProps & {
  maskType?: MASK_TYPES
  onChangeValue(value: string): void
}

export const MaskedInput = forwardRef<TextInput, MaskedInputProps>(
  function MaskedInput(props: MaskedInputProps, ref) {
    const inputStyles = StyleSheet.compose(
      styles.textInput,
      makeBaseMaskedInputStyle(props),
    )

    function handleChangeText(value: string) {
      if (props.maskType) {
        switch (props.maskType) {
          case 'cep':
            value = maskCEP(value)
            break
          case 'cnpj':
            value = maskCNPJ(value)
            break
          case 'cpf':
            value = maskCPF(value)
            break
          case 'cpfcnpj':
            value = maskCPFCNPJ(value)
            break
          case 'currency':
            value = maskCurrency(value, false)
            break
          case 'numbers':
            value = maskNumbers(value)
            break
          case 'telephone':
            value = maskPhone(value)
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
          maxFontSizeMultiplier={MAX_ACCESSIBILITY_MULTIPLIER}
          numberOfLines={1}
          autoCorrect={false}
          clearButtonMode={props.noClear ? 'never' : 'always'}
          autoComplete={props.autoCompleteType}
          cursorColor="#323238"
          selectionColor={undefined}
          editable={!props.isDisabled && !props.isInfo}
          autoCapitalize="none"
          keyboardType="number-pad"
          onChangeText={(value) => handleChangeText(value)}
          {...props}          
        />
      </Box>
    )
  },
)
