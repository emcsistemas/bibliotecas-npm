import React, { forwardRef } from 'react'
import { Platform, Pressable, TextInput } from 'react-native'
import { makeBaseTextInputStyle } from '../../styles/styles.factory'
import { CustomTextInputProps } from '../../styles/Types/ui-components.types'
import ExpoVectorIcon from '../EMCIcon'
import { Colors } from '../../theme'
import { dimensionCalculate } from '../../styles/styles.util'
import EMCBox from '../EMCBox'
import EMCHStack from '../EMCHStack'
import Consts from '../../styles/Consts'

  const EMCTextInput = (props: CustomTextInputProps, ref: any) => {
    let baseStyle = props.style ?? makeBaseTextInputStyle(props)

    return (
      <EMCBox w={props.w ? undefined : '100%'}>
        <EMCHStack
          align='center'
          justify={!props.readOnly && props.rightIcon ? 'flex-end' : undefined}
        >
          <TextInput
            ref={ref || undefined}
            style={baseStyle}
            {...props}
            numberOfLines={1}
            autoCorrect={false}
            clearButtonMode={
              props.noClear || props.isPassword || props.rightIcon
                ? 'never'
                : 'always'
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
          />
          {!props.readOnly && props.rightIcon && (
            <Pressable
              style={{
                position: 'absolute',
                paddingRight: 12,
                paddingBottom: dimensionCalculate(props.mb),
              }}
              onPress={
                props.rightIcon.onClick ? props.rightIcon.onClick : undefined
              }
            >
              <ExpoVectorIcon
                as={props.rightIcon.icon.as}
                name={props.rightIcon.icon.name}
                size={props.rightIcon.icon.size ?? Consts.DEFAULT_ICON_SIZE}
                color={props.rightIcon.icon.color ?? Colors.gray[500]}
              />
            </Pressable>
          )}
        </EMCHStack>
      </EMCBox>
    )
  }

  export default forwardRef<TextInput, CustomTextInputProps>(EMCTextInput)
