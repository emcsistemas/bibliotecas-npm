import { View, StyleSheet } from 'react-native'

import { CustomViewProps } from '../ui-components.types'
import { makeBaseViewStyle, styles } from '../styles'

export function VStack(props: CustomViewProps) {
  let viewStyles = StyleSheet.compose(makeBaseViewStyle(props), styles.vstack)

  if (props.style) {
    viewStyles = StyleSheet.compose(viewStyles, props.style)
  }

  return <View style={viewStyles}>{props.children}</View>
}
