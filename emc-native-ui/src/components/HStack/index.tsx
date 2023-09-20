import { View, StyleSheet } from 'react-native'

import { CustomViewProps } from '../ui-components.types'
import { makeBaseViewStyle, styles } from '../styles'

export function HStack(props: CustomViewProps) {
  let viewStyles = StyleSheet.compose(makeBaseViewStyle(props), styles.hstack)

  if (props.style) {
    viewStyles = StyleSheet.compose(viewStyles, props.style)
  }

  return <View style={viewStyles}>{props.children}</View>
}
