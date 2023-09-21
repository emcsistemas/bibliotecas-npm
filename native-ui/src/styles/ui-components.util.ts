import { DimensionValue } from 'react-native'
import { UI_SIZE_MULTIPLIER } from './ui-components.consts'
import { BorderSizeAcronymes, FontSizeAcronymes } from './ui-components.types'
import FontSizes from '../theme/FontSizes'

export function dimensionCalculate(dimension?: DimensionValue | 'full') {
  if (!dimension) return

  if (dimension === 'full') {
    return '100%'
  } else {
    return typeof dimension === 'number'
      ? dimension * UI_SIZE_MULTIPLIER
      : dimension
  }
}

export function iconSizeCalculate(size?: number) {
  if (!size) return

  return size * UI_SIZE_MULTIPLIER
}

export function convertBorderRadius(borderRadius?: BorderSizeAcronymes) {
  if (!borderRadius) return

  switch (borderRadius) {
    case 'xs':
      return 4
    case 'sm':
      return 6
    case 'md':
      return 8
    case 'lg':
      return 12
    case 'xl':
      return 16
    case '2xl':
      return 20
    case '3xl':
      return 24
    case 'full':
      return 999
    default:
      return 4
  }
}

export function convertFontSize(fontSize?: FontSizeAcronymes) {
  if (!fontSize) return

  let fontSizeNumber = 15.5

  switch (fontSize) {
    case '2xs':
      fontSizeNumber = FontSizes['2xs']
      break
    case 'xs':
      fontSizeNumber = FontSizes.xs
      break
    case 'sm':
      fontSizeNumber = FontSizes.sm 
      break
    case 'md':
      fontSizeNumber = FontSizes.md
      break
    case 'lg':
      fontSizeNumber = FontSizes.lg
      break
    case 'xl':
      fontSizeNumber = FontSizes.xl
      break
    case '2xl':
      fontSizeNumber = FontSizes['2xl']
      break
    case '3xl':
      fontSizeNumber = FontSizes['3xl']
      break
    case '4xl':
      fontSizeNumber = FontSizes['4xl']
      break
    case '5xl':
      fontSizeNumber = FontSizes['5xl']
      break
    case '6xl':
      fontSizeNumber = FontSizes['6xl']
      break
    case '7xl':
      fontSizeNumber = FontSizes['7xl']
  }

  return fontSizeNumber
}
