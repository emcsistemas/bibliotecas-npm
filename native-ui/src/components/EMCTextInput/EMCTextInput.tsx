import React, { forwardRef } from 'react'
import { Platform, Pressable, TextInput, TextInputProps } from 'react-native'
import { makeBaseTextInputStyle } from '../../styles/styles'
import { CustomTextInputProps } from '../../styles/ui-components.types'
import ExpoVectorIcon from '../EMCIcon'
import HStack from '../EMCHStack'
import { Colors } from '../../theme'

  const EMCTextInput = (props: CustomTextInputProps, ref: any) => {
    const baseStyle = props.style ?? makeBaseTextInputStyle(props)

    return (
      <HStack justify='flex-end'>
        <TextInput
          ref={ref || undefined}
          style={baseStyle}
          numberOfLines={1}
          autoCorrect={false}
          clearButtonMode={
            props.noClear || props.isPassword ? 'never' : 'always'
          }
          autoComplete={props.autoComplete}
          cursorColor={Colors.cursor}
          selectionColor={undefined}
          editable={!props.readOnly}
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
        {!props.readOnly && props.rightIcon && (
          <Pressable
            style={{ position: 'absolute', height: '100%', justifyContent: 'center', paddingRight: 12 }}
            onPress={
              props.rightIcon.onClick ? props.rightIcon.onClick : undefined
            }
          >
            <ExpoVectorIcon
              as={props.rightIcon.icon.as}
              name={props.rightIcon.icon.name}
              size={props.rightIcon.icon.size ?? 7}
              color={props.rightIcon.icon.color ?? Colors.gray[500]}
            />
          </Pressable>
        )}
      </HStack>
    )
  }

  export default forwardRef<TextInputProps, CustomTextInputProps>(EMCTextInput)
