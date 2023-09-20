import React, { forwardRef } from 'react'
import {
  Platform,
  Pressable,
  TextInput as RNTextInput,
  StyleSheet,
} from 'react-native'
import { useAuth } from '@hooks/authContext'
import { CustomTextInputProps } from '@ui-components/ui-components.types'
import { styles, makeBaseTextInputStyle } from '../styles'
import { MAX_ACCESSIBILITY_MULTIPLIER } from '@global/consts.general'
import { Icon } from '@ui-components/Icon'
import { HStack } from '@ui-components/HStack'

export const TextInput = forwardRef<RNTextInput, CustomTextInputProps>(
  function TextInput(props: CustomTextInputProps, ref) {
    const { config } = useAuth()

    const baseStyle = makeBaseTextInputStyle(props)

    const inputStyles = StyleSheet.compose(styles.textInput, baseStyle)

    return (
      <HStack justifyContent="flex-end">
        <RNTextInput
          ref={ref || undefined}
          style={inputStyles}
          maxFontSizeMultiplier={MAX_ACCESSIBILITY_MULTIPLIER}
          numberOfLines={1}
          autoCorrect={false}
          clearButtonMode={
            props.noClear || props.isPassword ? 'never' : 'always'
          }
          autoComplete={props.autoCompleteType}
          cursorColor="#323238"
          selectionColor={undefined}
          editable={!props.isDisabled && !props.isInfo}
          // InputRightElement={
          //   props.isDisabled
          //     ? undefined
          //     : props.rightIcon && (
          //         <TouchableOpacity
          //           activeOpacity={
          //             props.rightIcon.showOpacity ? DEFAULT_OPACITY_CLICK : 1
          //           }
          //           onPress={
          //             props.rightIcon.onClick
          //               ? () =>
          //                   props.rightIcon.onClick
          //                     ? props.rightIcon.onClick()
          //                     : null
          //               : undefined
          //           }
          //         >
          //           <Icon
          //             as={props.rightIcon.icon.as}
          //             name={props.rightIcon.icon.name}
          //             size={6}
          //             mr={2}
          //             color={
          //               props.rightIcon.icon.color
          //                 ? props.rightIcon.icon.color
          //                 : colors.gray[500]
          //             }
          //           />
          //         </TouchableOpacity>
          //       )
          // }
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
                : config.teclado_padrao
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
            <Icon
              as={props.rightIcon.icon.as}
              name={props.rightIcon.icon.name}
              size={7}
              color={'#71717a'}
            />
          </Pressable>
        )}
      </HStack>
    )
  },
)
