import React, { forwardRef } from 'react'
import { Platform, Pressable, TextInput, StyleSheet, TextInputProps } from 'react-native'
import { styles, makeBaseTextInputStyle } from '../../styles/styles'
import { CustomTextInputProps } from '../../styles/ui-components.types'
import ExpoVectorIcon from '../ExpoVectorIcon'
import HStack from '../HStack'

  const EMCTextInput = (props: CustomTextInputProps, ref: any) => {
    const baseStyle = makeBaseTextInputStyle(props)

    const inputStyles = StyleSheet.compose(styles.textInput, baseStyle)

    return (
      <HStack justifyContent="flex-end">
        <TextInput
          ref={ref || undefined}
          style={inputStyles}
          numberOfLines={1}
          autoCorrect={false}
          clearButtonMode={
            props.noClear || props.isPassword ? 'never' : 'always'
          }
          autoComplete={props.autoCompleteType}
          cursorColor="#323238"
          selectionColor={undefined}
          editable={!props.isDisabled && !props.isInfo}
          autoCapitalize={
            props.onlyNumbers ||
            props.isDecimal ||
            props.isLowerCase ||
            props.isPassword
              ? 'none'
              : props.isUpperCase
              ? 'characters'
              : props.capitalizeWords
              ? 'words'
              : 'sentences'
          }
          secureTextEntry={
            props.isPassword
              ? true
              : Platform.OS === 'ios' || props.onlyNumbers || props.isDecimal
              ? false
              : !!(props.isUpperCase || props.isLowerCase)
          }
          keyboardType={
            props.isDecimal
              ? Platform.OS === 'ios'
                ? 'decimal-pad'
                : props.defaultKeyboard
                ? 'numbers-and-punctuation'
                : 'decimal-pad'
              : props.isPhoneNumber
              ? 'phone-pad'
              : props.onlyNumbers
              ? 'number-pad'
              : Platform.OS === 'ios'
              ? 'default'
              : props.isUpperCase || props.isLowerCase
              ? 'visible-password'
              : 'default'
          }
          {...props}
        />
        {!props.isDisabled && props.rightIcon && (
          <Pressable
            style={{ position: 'absolute', paddingRight: 12 }}
            onPress={
              props.rightIcon.onClick ? props.rightIcon.onClick : undefined
            }
          >
            <ExpoVectorIcon
              as={props.rightIcon.icon.as}
              name={props.rightIcon.icon.name}
              size={7}
              color={'#71717a'}
            />
          </Pressable>
        )}
      </HStack>
    )
  }

  export default forwardRef<TextInputProps, CustomTextInputProps>(EMCTextInput)
