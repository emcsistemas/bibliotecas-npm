import { Platform } from "react-native"

const Consts = {
  UI_SIZE_MULTIPLIER: 4,
  DEFAULT_ICON_SIZE: 7,
  DEFAULT_BUTTON_ICON_SIZE: 6,
  DEFAULT_OPACITY_CLICK: 0.8,
  OPACITY_CLICK_HARD: 0.6,
  DISABLED_OPACITY: Platform.OS === 'android' ? 1 : 0.7,
  MAX_ACCESSIBILITY_MULTIPLIER: 1.1
}

export default Consts