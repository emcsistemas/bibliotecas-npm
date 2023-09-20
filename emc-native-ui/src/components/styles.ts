import { StyleSheet } from 'react-native'
import {
  CustomImageProps,
  CustomDividerProps,
  CustomViewProps,
  TextAreaProps,
  CustomButtonProps,
  CustomTextInputProps,
  CustomScrollViewProps,
} from './ui-components.types'
import {
  dimensionCalculate,
  convertBorderRadius,
  convertFontSize,
} from './ui-components.util'

export const styles = StyleSheet.create({
  box: {
    flexDirection: 'column',
  },
  center: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vstack: {
    flexDirection: 'column',
  },
  hstack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    width: '100%',
    height: 1,
  },
  textArea: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 8,
    textAlignVertical: 'top',
  },
  avatar: {
    borderRadius: 999,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 8,
    width: '100%',
    height: 40,
  },
  textInput: {
    width: '100%',
    height: 48,
    fontSize: 15.5,
    borderRadius: 4,
  },
})

export function makeBaseViewStyle(props: CustomViewProps) {
  return {
    position: props.position,
    left: props.left,
    top: props.top,
    flex: props.flex,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    backgroundColor: props.bg,
    width: dimensionCalculate(props.w),
    height: dimensionCalculate(props.h),
    minWidth: dimensionCalculate(props.minW),
    minHeight: dimensionCalculate(props.minH),
    maxWidth: dimensionCalculate(props.maxWidth),
    maxHeight: dimensionCalculate(props.maxHeight),
    padding: dimensionCalculate(props.p),
    paddingHorizontal: dimensionCalculate(props.px),
    paddingVertical: dimensionCalculate(props.py),
    paddingTop: dimensionCalculate(props.pt),
    paddingBottom: dimensionCalculate(props.pb),
    paddingLeft: dimensionCalculate(props.pl),
    paddingRight: dimensionCalculate(props.pr),
    margin: dimensionCalculate(props.m),
    marginHorizontal: dimensionCalculate(props.mx),
    marginVertical: dimensionCalculate(props.my),
    marginLeft: dimensionCalculate(props.ml),
    marginRight: dimensionCalculate(props.mr),
    marginTop: dimensionCalculate(props.mt),
    marginBottom: dimensionCalculate(props.mb),
    borderWidth: props.borderWidth,
    borderBottomWidth: props.borderBottomWidth,
    borderTopWidth: props.borderTopWidth,
    borderRightWidth: props.borderRightWidth,
    borderLeftWidth: props.borderLeftWidth,
    borderRadius: convertBorderRadius(props.rounded),
    borderColor: props.borderColor,
    borderBottomColor: props.borderBottomColor,
    borderTopColor: props.borderTopColor,
    borderRightColor: props.borderRightColor,
    borderLeftColor: props.borderLeftColor,
    opacity: props.opacity,
    overflow: props.overflow,
    zIndex: props.zIndex,
  }
}

export function makeBaseDividerStyle(props: CustomDividerProps) {
  return {
    backgroundColor: props.bg || '#e4e4e7', // '#d6d3d1',
    margin: dimensionCalculate(props.m),
    marginHorizontal: dimensionCalculate(props.mx),
    marginVertical: dimensionCalculate(props.my),
    marginTop: dimensionCalculate(props.mt),
    marginBottom: dimensionCalculate(props.mb),
    marginLeft: dimensionCalculate(props.ml),
    marginRight: dimensionCalculate(props.mr),
  }
}

export function makeBaseTextAreaStyle(props: TextAreaProps) {
  return {
    fontSize: convertFontSize(props.fSize),
    color: props.textColor,
    fontFamily: props.fFamily,
    width: dimensionCalculate(props.w),
    height: dimensionCalculate(props.h),
    margin: dimensionCalculate(props.m),
    marginTop: dimensionCalculate(props.mt),
    marginBottom: dimensionCalculate(props.mb),
    marginLeft: dimensionCalculate(props.ml),
    marginRight: dimensionCalculate(props.mr),
    borderColor: props.bColor,
  }
}

export function makeBaseTextInputStyle(props: CustomTextInputProps) {
  const fontSizeAcronyme =
    props.fSize ||
    (props.small
      ? props.isTablet
        ? 'md'
        : 'sm'
      : props.isTablet
      ? 'lg'
      : 'md')

  return {
    fontFamily: props.fFamily,
    fontSize: convertFontSize(fontSizeAcronyme),
    flex: props.flex,
    width: props.w ? dimensionCalculate(props.w) : '100%',
    height: dimensionCalculate(props.h ? props.h : props.small ? 11 : 12),
    margin: dimensionCalculate(props.noMargin ? 0 : props.m),
    marginTop: dimensionCalculate(props.noMargin ? 0 : props.mt),
    marginBottom: dimensionCalculate(
      props.mb || props.mb === 0
        ? props.mb
        : props.noMargin
        ? 0
        : props.small
        ? 2
        : 4,
    ),
    marginLeft: dimensionCalculate(props.noMargin ? 0 : props.ml),
    marginRight: dimensionCalculate(props.noMargin ? 0 : props.mr),
    padding: dimensionCalculate(props.p),
    paddingHorizontal: dimensionCalculate(props.isInfo ? 2 : 3),
    paddingVertical: dimensionCalculate(props.isInfo ? 2 : 3),
    paddingTop: dimensionCalculate(props.isInfo ? 2 : 3),
    paddingBottom: dimensionCalculate(props.isInfo ? 2 : 3),
    paddingLeft: dimensionCalculate(props.isInfo ? 2 : 3),
    paddingRight: dimensionCalculate(props.isInfo ? 2 : 3),
    backgroundColor: !props.isDisabled
      ? props.textColor || '#fff'
      : props.hasBorder
      ? props.isInfo
        ? undefined
        : '#e5e5e5'
      : props.blueScreen
      ? '#94a3b8'
      : '#fff',
    borderColor: !props.isDisabled
      ? props.borderColor
      : props.hasBorder
      ? props.isInfo
        ? '#27272a'
        : '#71717a'
      : props.blueScreen
      ? '#94a3b8'
      : undefined,
    borderWidth: props.hasBorder ? 1 : 0,
    opacity: !props.isDisabled
      ? undefined
      : (props.isInfo && props.hasBorder) ||
        (!props.hasBorder && props.blueScreen)
      ? 1
      : undefined,
  }
}

export function makeBaseMaskedInputStyle(props: CustomTextInputProps) {
  const fontSizeAcronyme =
    props.fSize ||
    (props.small
      ? props.isTablet
        ? 'md'
        : 'sm'
      : props.isTablet
      ? 'lg'
      : 'md')

  return {
    fontFamily: props.fFamily,
    fontSize: convertFontSize(fontSizeAcronyme),
    flex: props.flex,
    width: props.w ? dimensionCalculate(props.w) : '100%',
    height: dimensionCalculate(props.h ? props.h : props.small ? 11 : 12),
    margin: dimensionCalculate(props.noMargin ? 0 : props.m),
    marginTop: dimensionCalculate(props.noMargin ? 0 : props.mt),
    marginBottom: dimensionCalculate(
      props.mb || props.mb === 0
        ? props.mb
        : props.noMargin
        ? 0
        : props.small
        ? 2
        : 4,
    ),
    marginLeft: dimensionCalculate(props.noMargin ? 0 : props.ml),
    marginRight: dimensionCalculate(props.noMargin ? 0 : props.mr),
    padding: dimensionCalculate(props.p),
    paddingHorizontal: dimensionCalculate(props.isInfo ? 2 : 3),
    paddingVertical: dimensionCalculate(props.isInfo ? 2 : 3),
    paddingTop: dimensionCalculate(props.isInfo ? 2 : 3),
    paddingBottom: dimensionCalculate(props.isInfo ? 2 : 3),
    paddingLeft: dimensionCalculate(props.isInfo ? 2 : 3),
    paddingRight: dimensionCalculate(props.isInfo ? 2 : 3),
    backgroundColor: !props.isDisabled ? props.textColor || '#fff' : '#e5e5e5',
    opacity: !props.isDisabled ? 1 : 0.7,
    borderColor: !props.isDisabled ? props.borderColor : '#71717a',
    borderWidth: 1,
  }
}

export function makeBaseImageStyle(props: CustomImageProps) {
  return {
    width: dimensionCalculate(props.w),
    height: dimensionCalculate(props.h),
    backgroundColor: props.bg,
    margin: dimensionCalculate(props.m),
    marginTop: dimensionCalculate(props.mt),
    marginBottom: dimensionCalculate(props.mb),
    marginLeft: dimensionCalculate(props.ml),
    marginRight: dimensionCalculate(props.mr),
    borderColor: props.borderColor,
    borderWidth: props.borderWidth,
    borderRadius: convertBorderRadius(props.rounded),
  }
}

export function makeBaseEMCButtonStyle(props: CustomButtonProps) {
  return {
    position: props.position,
    left: props.left,
    top: props.top,
    flex: props.flex,
    backgroundColor: props.bg,
    width: props.w ? dimensionCalculate(props.w) : '100%',
    height: props.h ? dimensionCalculate(props.h) : 40,
    minWidth: dimensionCalculate(props.minW),
    minHeight: dimensionCalculate(props.minH),
    maxWidth: dimensionCalculate(props.maxWidth),
    maxHeight: dimensionCalculate(props.maxHeight),
    margin: dimensionCalculate(props.m),
    marginHorizontal: dimensionCalculate(props.mx),
    marginVertical: dimensionCalculate(props.my),
    marginLeft: dimensionCalculate(props.ml),
    marginRight: dimensionCalculate(props.mr),
    marginTop: dimensionCalculate(props.mt),
    marginBottom: dimensionCalculate(props.mb),
    borderWidth: props.borderWidth,
    borderBottomWidth: props.borderBottomWidth,
    borderTopWidth: props.borderTopWidth,
    borderRightWidth: props.borderRightWidth,
    borderLeftWidth: props.borderLeftWidth,
    borderRadius: props.rounded ? convertBorderRadius(props.rounded) : 8,
    borderColor: props.borderColor,
    borderBottomColor: props.borderBottomColor,
    borderTopColor: props.borderTopColor,
    borderRightColor: props.borderRightColor,
    borderLeftColor: props.borderLeftColor,
    opacity: props.isDisabled ? 0.7 : props.opacity,
    overflow: props.overflow,
    zIndex: props.zIndex,
  }
}

export function makeBaseScrollViewContainerStyle(props: CustomScrollViewProps) {
  return {
    flex: props.flex,
    width: dimensionCalculate(props.w),
    height: dimensionCalculate(props.h),
    margin: dimensionCalculate(props.m),
    marginHorizontal: dimensionCalculate(props.mx),
    marginVertical: dimensionCalculate(props.my),
    marginTop: dimensionCalculate(props.mt),
    marginBottom: dimensionCalculate(props.mb),
    marginLeft: dimensionCalculate(props.ml),
    marginRight: dimensionCalculate(props.mr),
    padding: dimensionCalculate(props.p),
    paddingHorizontal: dimensionCalculate(props.px),
    paddingVertical: dimensionCalculate(props.py),
    paddingTop: dimensionCalculate(props.pt),
    paddingBottom: dimensionCalculate(props.pb),
    paddingLeft: dimensionCalculate(props.pl),
    paddingRight: dimensionCalculate(props.pr),
  }
}
