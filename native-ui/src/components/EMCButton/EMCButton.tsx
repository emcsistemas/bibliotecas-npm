import { Pressable, StyleProp, View, ViewProps } from 'react-native'
import { makeBaseEMCButtonStyle } from '../../styles/styles.factory'
import { CustomButtonProps } from '../../styles/Types/ui-components.types'
import EMCBox from '../EMCBox'
import EMCText from '../EMCText'
import EMCSpinner from '../EMCSpinner'
import { Colors } from '../../theme'
import Consts from '../../styles/Consts'
import EMCHStack from '../EMCHStack'
import EMCIcon from '../EMCIcon'
import { dimensionCalculate } from '../../styles/styles.util'

const EMCButton = (props: CustomButtonProps) => {
  const baseStyle: StyleProp<ViewProps> = makeBaseEMCButtonStyle(props)  

  const LoadingComponent = () => {
    return (
      <EMCBox
        flex={1}
        align='center'
        justify='center'
        opacity={Consts.DEFAULT_OPACITY_CLICK}
      >
        {props.loadingText ? (
          <EMCText fWeight='bold'>{props.loadingText}</EMCText>
        ) : (
          <EMCSpinner color={props.loadingSpinnerColor} />
        )}
      </EMCBox>
    )
  }

  const TitleComponent = () => {
    const variantFontColor = () => {
      if (!props.variant) {
        return Colors.white
      }

      switch (props.variant) {
        case 'outline':
          return Colors.button
        case 'outline-red':
          return Colors.danger[600]
        default:
          return Colors.white
      }
    }

    const paddingTextLeftCalculate = () => {
      if (props.leftIcon) {
        return dimensionCalculate(2)
      }
      return 3
    }

    const paddingTextRightCalculate = () => {
      if (props.rightIcon) {
        return dimensionCalculate(2)
      }
      return 3
    }

    return (
      <EMCBox
        flex={1}
        align='center'
        justify='center'
        pl={paddingTextLeftCalculate()}
        pr={paddingTextRightCalculate()}
        m={props.titleStyle?.m}
        mt={props.titleStyle?.mt}
        mb={props.titleStyle?.mb}
        ml={props.titleStyle?.ml}
        mr={props.titleStyle?.mr}
      >
        <EMCText
          fSize={props.titleStyle?.fSize ?? props.isDialog ? (props.isTablet ? 'md' : 'sm') : props.isTablet ? 'lg' : 'md'}
          fColor={props.titleStyle?.fColor ?? variantFontColor()}
          fWeight={props.titleStyle?.fWeight ?? 'bold'}
          wordWrap={props.titleStyle?.wordWrap}
          noAccessibility={props.isDialog || props.titleStyle?.noAccessibility}
          textAlign={props.titleStyle?.textAlign}
          textTransform={props.titleStyle?.textTransform}
          w={props.titleStyle?.w}
          opacity={props.titleStyle?.opacity}
        >
          {props.title}
        </EMCText>
      </EMCBox>
    )  
  }

  const SubTitleComponent = () => {
    const variantFontColor = () => {
      if (!props.variant) {
        return Colors.white
      }

      switch (props.variant) {
        case 'outline':
          return Colors.button
        case 'outline-red':
          return Colors.danger[600]
        default:
          return Colors.white
      }
    }

    const paddingTextLeftCalculate = () => {
      if (props.leftIcon) {
        return dimensionCalculate(2)
      }
      return 3
    }

    const paddingTextRightCalculate = () => {
      if (props.rightIcon) {
        return dimensionCalculate(2)
      }
      return 3
    }

    return (
      <EMCBox
        flex={1}
        align='center'
        justify='center'
        pl={paddingTextLeftCalculate()}
        pr={paddingTextRightCalculate()}
        m={props.subtitleStyle?.m}
        mt={props.subtitleStyle?.mt}
        mb={props.subtitleStyle?.mb}
        ml={props.subtitleStyle?.ml}
        mr={props.subtitleStyle?.mr}
      >
        <EMCText
          fSize={
            props.subtitleStyle?.fSize ?? props.isDialog
              ? props.isTablet
                ? 'md'
                : 'sm'
              : props.isTablet
              ? 'lg'
              : 'md'
          }
          fColor={props.subtitleStyle?.fColor ?? variantFontColor()}
          fWeight={props.subtitleStyle?.fWeight ?? 'normal'}
          wordWrap={props.subtitleStyle?.wordWrap}
          noAccessibility={
            props.isDialog || props.subtitleStyle?.noAccessibility
          }
          textAlign={props.subtitleStyle?.textAlign}
          textTransform={props.subtitleStyle?.textTransform}
          w={props.subtitleStyle?.w}
          opacity={props.subtitleStyle?.opacity}
        >
          {props.subtitle}
        </EMCText>
      </EMCBox>
    )
  }

  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        baseStyle,
        {
          opacity: props.disabled
            ? Consts.DISABLED_OPACITY
            : props.loading || props.noPressedEffect
            ? 1
            : pressed
            ? Consts.DEFAULT_OPACITY_CLICK
            : 1,
        },
      ]}
      onPress={props.disabled || props.loading ? undefined : props.onPress}
      onPressIn={props.disabled || props.loading ? undefined : props.onPressIn}
      onPressOut={
        props.disabled || props.loading ? undefined : props.onPressOut
      }
    >
      {props.loading || (!props.leftIcon && !props.rightIcon) ? (
        props.loading ? (
          <LoadingComponent />
        ) : props.title ? (
          <EMCBox
            flex={1}
            align='center'
          >
            <TitleComponent />
            {props.subtitle && <SubTitleComponent />}
          </EMCBox>
        ) : (
          props.children
        )
      ) : (
        <EMCHStack
          flex={1}
          align='center'
        >
          {props.leftIcon && (
            <View
              style={{
                position: 'absolute',
                left: 0,
                paddingBottom: dimensionCalculate(props.mb),
              }}
            >
              <EMCIcon
                as={props.leftIcon.as}
                name={props.leftIcon.name}
                size={props.leftIcon.size ?? Consts.DEFAULT_ICON_SIZE}
                color={props.leftIcon.color ?? Colors.white}
              />
            </View>
          )}

          <EMCBox
            flex={1}
            align='center'
          >
            <TitleComponent />
            {props.subtitle && <SubTitleComponent />}
          </EMCBox>

          {props.rightIcon && (
            <View
              style={{
                position: 'absolute',
                right: 0,
                paddingBottom: dimensionCalculate(props.mb),
              }}
            >
              <EMCIcon
                as={props.rightIcon.as}
                name={props.rightIcon.name}
                size={props.rightIcon.size ?? Consts.DEFAULT_ICON_SIZE}
                color={props.rightIcon.color ?? Colors.white}
              />
            </View>
          )}
        </EMCHStack>
      )}
    </Pressable>
  )
}

export default EMCButton