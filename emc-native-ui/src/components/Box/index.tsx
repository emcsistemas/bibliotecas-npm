import { View, StyleSheet } from 'react-native'

import { CustomViewProps } from '../ui-components.types'
import { makeBaseViewStyle, styles } from '../styles'

export function Box(props: CustomViewProps) {
  let boxStyles = StyleSheet.compose(styles.box, makeBaseViewStyle(props))

  if (props.style) {
    boxStyles = StyleSheet.compose(boxStyles, props.style)
  }

  return <View style={boxStyles}>{props.children}</View>
}
