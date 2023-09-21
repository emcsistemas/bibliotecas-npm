import { ReactElement } from 'react'
import {
  AnimatableNumericValue,
  ColorValue,
  DimensionValue,
  ImageProps,
  PressableProps,
  ScrollViewProps,
  StyleProp,
  TextInputProps,
  TextProps, ViewStyle
} from 'react-native'

export type FontSizeAcronymes =
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl'

export type BorderSizeAcronymes =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | 'full'

type JustifyContentAcronymes =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

type AlignItemsAcronymes = 'flex-start' | 'center' | 'flex-end'

export interface CustomViewProps {
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
  bg?: ColorValue
  position?: 'absolute' | 'relative'
  left?: DimensionValue
  top?: DimensionValue
  flex?: number
  justifyContent?: JustifyContentAcronymes
  alignItems?: AlignItemsAcronymes
  w?: DimensionValue | 'full'
  h?: DimensionValue | 'full'
  minW?: DimensionValue
  minH?: DimensionValue
  maxWidth?: DimensionValue
  maxHeight?: DimensionValue
  p?: DimensionValue
  px?: DimensionValue
  py?: DimensionValue
  pt?: DimensionValue
  pb?: DimensionValue
  pl?: DimensionValue
  pr?: DimensionValue
  m?: DimensionValue
  mx?: DimensionValue
  my?: DimensionValue
  mt?: DimensionValue
  mb?: DimensionValue
  ml?: DimensionValue
  mr?: DimensionValue
  borderColor?: ColorValue
  borderWidth?: number
  borderLeftColor?: ColorValue
  borderLeftWidth?: number
  borderTopColor?: ColorValue
  borderTopWidth?: number
  borderRightColor?: ColorValue
  borderRightWidth?: number
  borderBottomColor?: ColorValue
  borderBottomWidth?: number
  rounded?: BorderSizeAcronymes
  opacity?: AnimatableNumericValue
  overflow?: 'visible' | 'hidden'
  zIndex?: number
  showShadow?: boolean
  shadowKeyboard?: boolean
}

export interface CustomDividerProps {
  bg?: ColorValue
  m?: DimensionValue
  mx?: DimensionValue
  my?: DimensionValue
  mt?: DimensionValue
  mb?: DimensionValue
  ml?: DimensionValue
  mr?: DimensionValue
}

/* eslint-disable */
export interface CustomIconProps {
  as: any
  name: any
  color?: ColorValue
  size?: number
  m?: DimensionValue
  mt?: DimensionValue
  mb?: DimensionValue
  ml?: DimensionValue
  mr?: DimensionValue
  opacity?: AnimatableNumericValue
}
/* eslint-enable */

export interface TextAreaProps extends TextInputProps {
  fFamily?: string
  fSize?: FontSizeAcronymes
  textColor?: ColorValue
  autoCompleteType?: TextInputProps['autoComplete']
  w?: DimensionValue | 'full'
  h?: DimensionValue | 'full'
  m?: DimensionValue
  mt?: DimensionValue
  mb?: DimensionValue
  ml?: DimensionValue
  mr?: DimensionValue
  bColor?: ColorValue
}

export interface CustomTextInputProps extends TextInputProps {
  fFamily?: string
  fSize?: FontSizeAcronymes
  fColor?: ColorValue
  autoCompleteType?: TextInputProps['autoComplete']
  flex?: number
  w?: DimensionValue | 'full'
  h?: DimensionValue | 'full'
  p?: DimensionValue
  px?: DimensionValue
  py?: DimensionValue
  pt?: DimensionValue
  pb?: DimensionValue
  pl?: DimensionValue
  pr?: DimensionValue
  m?: DimensionValue
  mt?: DimensionValue
  mb?: DimensionValue
  ml?: DimensionValue
  mr?: DimensionValue
  hasBorder?: boolean
  bColor?: ColorValue
  noMargin?: boolean
  small?: boolean
  isInfo?: boolean
  isUpperCase?: boolean
  isLowerCase?: boolean
  onlyNumbers?: boolean
  isDecimal?: boolean
  noClear?: boolean
  capitalizeWords?: boolean
  isPassword?: boolean
  isPhoneNumber?: boolean
  blueScreen?: boolean
  isDisabled?: boolean
  isTablet?: boolean
  defaultKeyboard?: boolean
  rightIcon?: {
    icon: CustomIconProps
    showOpacity?: boolean
    onClick?(): void
  }
}

export interface CustomImageProps extends ImageProps {
  alt: string
  w?: DimensionValue | 'full'
  h?: DimensionValue | 'full'
  bg?: ColorValue
  m?: DimensionValue
  mt?: DimensionValue
  mb?: DimensionValue
  ml?: DimensionValue
  mr?: DimensionValue
  bColor?: ColorValue
  bWidth?: number
  rounded?: BorderSizeAcronymes
  source: {
    uri: string
  }
}

export interface CustomButtonProps extends PressableProps {
  text?: string
  textStyle?: CustomTextProps
  bg?: ColorValue
  position?: 'absolute' | 'relative'
  left?: DimensionValue
  top?: DimensionValue
  flex?: number
  justifyContent?: JustifyContentAcronymes
  alignItems?: AlignItemsAcronymes
  w?: DimensionValue | 'full'
  h?: DimensionValue | 'full'
  minW?: DimensionValue
  minH?: DimensionValue
  maxWidth?: DimensionValue
  maxHeight?: DimensionValue
  p?: DimensionValue
  px?: DimensionValue
  py?: DimensionValue
  pt?: DimensionValue
  pb?: DimensionValue
  pl?: DimensionValue
  pr?: DimensionValue
  m?: DimensionValue
  mx?: DimensionValue
  my?: DimensionValue
  mt?: DimensionValue
  mb?: DimensionValue
  ml?: DimensionValue
  mr?: DimensionValue
  bColor?: ColorValue
  bWidth?: number
  bLeftColor?: ColorValue
  bLeftWidth?: number
  bTopColor?: ColorValue
  bTopWidth?: number
  bRightColor?: ColorValue
  bRightWidth?: number
  bBottomColor?: ColorValue
  bBottomWidth?: number
  rounded?: BorderSizeAcronymes
  opacity?: AnimatableNumericValue
  overflow?: 'visible' | 'hidden'
  zIndex?: number
  leftIcon?: ReactElement
  rightIcon?: ReactElement
  isLoading?: boolean
  isLoadingText?: string
  isLoadingTextColor?: ColorValue
  isDisabled?: boolean
  spinnerColor?: ColorValue
  noPressedEffect?: boolean
}

export interface CustomScrollViewProps extends ScrollViewProps {
  children: React.ReactNode
  flex?: number
  w?: DimensionValue | 'full'
  h?: DimensionValue | 'full'
  m?: DimensionValue
  mx?: DimensionValue
  my?: DimensionValue
  mt?: DimensionValue
  mb?: DimensionValue
  ml?: DimensionValue
  mr?: DimensionValue
  p?: DimensionValue
  px?: DimensionValue
  py?: DimensionValue
  pt?: DimensionValue
  pb?: DimensionValue
  pl?: DimensionValue
  pr?: DimensionValue
}

export interface CustomTextProps extends TextProps {
  fSize?: FontSizeAcronymes | number
  fColor?: ColorValue
  isBold?: boolean
  wordWrap?: boolean
  noAccessibility?: boolean
  textAlign?: 'left' | 'center' | 'right' | 'justify' | 'auto'
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined
  w?: DimensionValue | 'full'
  m?: number
  mt?: number
  mb?: number
  mr?: number
  ml?: number
  opacity?: number
}
