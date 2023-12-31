import React, { forwardRef } from 'react'
import { TextInput } from 'react-native'
import { makeBaseMaskedInputStyle } from '../../styles/styles.factory'
import { CustomTextInputProps } from '../../styles/Types/ui-components.types'
import EMCBox from '../EMCBox/EMCBox'
import {
  INPUT_MASK_TYPES,
  inputMaskCEP,
  inputMaskCNPJ,
  inputMaskCPF,
  inputMaskCPFCNPJ,
  inputMaskCurrency,
  inputMaskNumbers,
  inputMaskPhone,
  inputMaskTime
} from '../../util/util.masks'
import { Colors } from 'react-native/Libraries/NewAppScreen'

type MaskedInputProps = CustomTextInputProps & {
  maskType?: INPUT_MASK_TYPES
  onChangeValue(value: string): void
}

const EMCMaskedInput = (props: MaskedInputProps, ref: any) => {
    const baseStyle = props.style ?? makeBaseMaskedInputStyle(props)

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
          case 'time':
            value = inputMaskTime(value)
            break
        }
        props.onChangeValue(value)
      } else {
        props.onChangeValue(value)
      }
    }

    return (
      <EMCBox w='full'>
        <TextInput
          ref={ref || undefined}
          {...props}
          style={baseStyle}
          numberOfLines={1}
          autoCorrect={false}
          clearButtonMode={props.noClear ? 'never' : 'always'}
          autoComplete={props.autoComplete}
          cursorColor={Colors.cursor}
          selectionColor={undefined}
          editable={!props.readOnly}
          autoCapitalize='none'
          keyboardType='number-pad'
          onChangeText={(value) => handleChangeText(value)}
        />
      </EMCBox>
    )
  }

export default forwardRef<TextInput, MaskedInputProps>(EMCMaskedInput)