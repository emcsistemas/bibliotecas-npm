import { useMemo } from 'react'
import { Dimensions, Platform, TouchableOpacity, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import * as Haptics from 'expo-haptics'
import { Ionicons } from '@expo/vector-icons'

import { CustomDecimalKeyboardProps } from '../../styles/Types/ui-components.types'
import EMCColors from '../../theme/Colors'
import EMCIcon from '../EMCIcon'
import EMCVStack from '../EMCVStack'
import EMCText from '../EMCText'
import EMCBox from '../EMCBox'
import EMCHStack from '../EMCHStack'
import Consts from '../../styles/Consts'

const EMCDecimalKeyboard = (props: CustomDecimalKeyboardProps) => {
  const insets = useSafeAreaInsets()  

  type KeyboardButtonProps = {
    numberButtonText: string
    numberButtonFooterText?: string
    transparent?: boolean
    topAlignment?: boolean
    isBackSpace?: boolean
  }

  function KeyboardButton({
    numberButtonText,
    numberButtonFooterText,
    transparent,
    topAlignment,
    isBackSpace,
  }: KeyboardButtonProps) {
    const buttonWidth = useMemo(() => {
      return Math.trunc(Dimensions.get('window').width / 3 - 12)
    }, [])

    const buttonStyles = StyleSheet.create({
      buttonContainer: {
        width: buttonWidth,
        height: !props.slim ? 52 : 44,
        backgroundColor: transparent ? undefined : EMCColors.white,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonShadow: {
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 5,
      },
    })

    return (
      <TouchableOpacity
        activeOpacity={
          props.readOnly || numberButtonText === ''
            ? 1
            : Consts.OPACITY_CLICK_HARD
        }
        delayPressIn={0}
        onPressIn={
          props.readOnly || numberButtonText === ''
            ? undefined
            : () => numberPress(numberButtonText)
        }
      >
        <EMCVStack
          style={
            transparent
              ? [buttonStyles.buttonContainer]
              : [buttonStyles.buttonContainer, buttonStyles.buttonShadow]
          }
        >
          {!isBackSpace && (
            <EMCText
              style={props.slim ? styles.primaryTextSlim : styles.primaryText}
            >
              {numberButtonText}
            </EMCText>
          )}
          {!props.slim &&
            !isBackSpace &&
            (numberButtonText || topAlignment) && (
              <EMCText style={styles.footerText}>
                {numberButtonFooterText}
              </EMCText>
            )}
          {isBackSpace && (
            <EMCIcon
              as={Ionicons}
              name='backspace-outline'
              size={7}
              color={EMCColors.gray[800]}
            />
          )}
        </EMCVStack>
      </TouchableOpacity>
    )    
  }

  function numberPress(valuePressed: string) {
    if (!props.onChangeFieldValue) {
      Haptics.notificationAsync()
      return
    }

    if (!props.isString) {
      if (props.currentFieldValue === '0' && valuePressed === '0') {
        Haptics.notificationAsync()
        return
      }
    }

    if (props.maxLength && valuePressed !== 'x') {
      if (props.currentFieldValue && props.currentFieldValue.length === props.maxLength) {
        Haptics.notificationAsync()
        return
      }
    }

    if (
      valuePressed === ',' &&
      props.currentFieldValue &&
      props.currentFieldValue.includes(',')
    ) {
      Haptics.notificationAsync()
      return
    }

    if (
      valuePressed === ',' &&
      (!props.currentFieldValue || props.currentFieldValue === '')
    ) {
      Haptics.notificationAsync()
      return
    }

    if (valuePressed !== 'x' && props.currentFieldValue) {
      const numberParts = props.currentFieldValue.split(',')

      if (
        numberParts.length === 2 &&
        numberParts[1].length >= (props.decimals ?? 2)
      ) {
        Haptics.notificationAsync()
        return
      }
    }

    Platform.OS === 'ios' && Haptics.selectionAsync()

    if (!props.isString) {
      if (props.currentFieldValue === '0' && valuePressed !== ',') {
        props.currentFieldValue = ''
      }
    }

    let newFieldValue = props.currentFieldValue || ''

    if (valuePressed === 'x') {
      if (newFieldValue && newFieldValue.length > 0) {
        newFieldValue = newFieldValue.substring(0, newFieldValue.length - 1)
      }
    } else {
      newFieldValue = newFieldValue + valuePressed
    }

    props.onChangeFieldValue(newFieldValue)
  }

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      align: 'center',
      backgroundColor: EMCColors.gray[300],
      paddingTop: 8,
      paddingBottom: props.footerButton
        ? 18
        : insets.bottom + (Platform.OS === 'android' ? 5 : 0),
      paddingHorizontal: 8,
      marginTop: props.noMargim ? 0 : 16,
    },    
    primaryText: {
      fontSize: 22,
      color: EMCColors.gray[800],
    },
    primaryTextSlim: {
      fontSize: 21,
      color: EMCColors.gray[800],
    },
    footerContainer: {
      width: '100%',
      height: props.isTablet ? 68 : 64,
      flexDirection: 'row',
      align: 'center',
      marginBottom: insets.bottom + (Platform.OS === 'android' ? 5 : 0),
    },
    footerText: {
      fontSize: 10,
      color: EMCColors.gray[800],
    },
  })

  return (
    <>
      <View style={styles.container}>
        <EMCHStack
          w='full'
          mb={2}
          align='center'
          justify='space-evenly'
        >
          <KeyboardButton
            numberButtonText='1'
            topAlignment
          />
          <KeyboardButton
            numberButtonText='2'
            numberButtonFooterText='ABC'
          />
          <KeyboardButton
            numberButtonText='3'
            numberButtonFooterText='DEF'
          />
        </EMCHStack>
        <EMCHStack
          w='full'
          mb={2}
          align='center'
          justify='space-evenly'
        >
          <KeyboardButton
            numberButtonText='4'
            numberButtonFooterText='GHI'
          />
          <KeyboardButton
            numberButtonText='5'
            numberButtonFooterText='JKL'
          />
          <KeyboardButton
            numberButtonText='6'
            numberButtonFooterText='MNO'
          />
        </EMCHStack>
        <EMCHStack
          w='full'
          mb={2}
          align='center'
          justify='space-evenly'
        >
          <KeyboardButton
            numberButtonText='7'
            numberButtonFooterText='PQRS'
          />
          <KeyboardButton
            numberButtonText='8'
            numberButtonFooterText='TUV'
          />
          <KeyboardButton
            numberButtonText='9'
            numberButtonFooterText='WXYZ'
          />
        </EMCHStack>
        <EMCHStack
          w='full'
          align='center'
          justify='space-evenly'
        >
          <KeyboardButton
            numberButtonText={props.noComma ? '' : ','}
            transparent
          />
          <KeyboardButton numberButtonText='0' />
          <KeyboardButton
            numberButtonText='x'
            isBackSpace
            transparent
          />
        </EMCHStack>
      </View>
      <View style={styles.footerContainer}>
        {props.footerButton && (
          <EMCBox
            flex={1}
            bRightColor={EMCColors.gray[300]}
            bRightWidth={0.5}
          >
            <TouchableOpacity
              style={{ flex: 1 }}
              activeOpacity={
                props.footerButtonDisabled ? 1 : Consts.DEFAULT_OPACITY_CLICK
              }
              {...props.footerButton}
            >
              <EMCBox
                flex={1}
                bg={
                  props.footerButtonDisabled
                    ? EMCColors.gray[500]
                    : EMCColors.blue[400]
                }
                align='center'
                justify='center'
                opacity={props.footerButtonDisabled ? 0.5 : 1}
              >
                <EMCText
                  fColor={EMCColors.light[50]}
                  fWeight='bold'
                >
                  {props.footerButton.title}
                </EMCText>
              </EMCBox>
            </TouchableOpacity>
          </EMCBox>
        )}
        {props.aditionalFooterButton && (
          <EMCBox
            flex={1}
            bLeftColor={EMCColors.gray[300]}
            bLeftWidth={0.5}
          >
            <TouchableOpacity
              style={{ flex: 1 }}
              activeOpacity={
                props.aditionalButtonDisabled ? 1 : Consts.DEFAULT_OPACITY_CLICK
              }
              {...props.aditionalFooterButton}
            >
              <EMCBox
                flex={1}
                bg={
                  props.aditionalButtonDisabled
                    ? EMCColors.gray[300]
                    : EMCColors.red[500]
                }
                align='center'
                justify='center'
              >
                <EMCText
                  fColor={EMCColors.light[50]}
                  fWeight='bold'
                >
                  {props.aditionalFooterButton.title}
                </EMCText>
              </EMCBox>
            </TouchableOpacity>
          </EMCBox>
        )}
      </View>
    </>
  )
}

export default EMCDecimalKeyboard
