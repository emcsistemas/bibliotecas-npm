import { DimensionValue } from 'react-native'
import { UI_SIZE_MULTIPLIER } from './ui-components.consts'
import { BorderSizeAcronymes, FontSizeAcronymes } from './ui-components.types'

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
      fontSizeNumber = 10
      break
    case 'xs':
      fontSizeNumber = 12.5
      break
    case 'sm':
      fontSizeNumber = 14
      break
    case 'md':
      fontSizeNumber = 16
      break
    case 'lg':
      fontSizeNumber = 18
      break
    case 'xl':
      fontSizeNumber = 20
      break
    case '2xl':
      fontSizeNumber = 22
      break
    case '3xl':
      fontSizeNumber = 24
      break
    case '4xl':
      fontSizeNumber = 26
      break
    case '5xl':
      fontSizeNumber = 28
      break
    case '6xl':
      fontSizeNumber = 30
      break
    case '7xl':
      fontSizeNumber = 32
  }

  return fontSizeNumber
}
