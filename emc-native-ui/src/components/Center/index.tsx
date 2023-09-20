import { View, StyleSheet } from 'react-native'

import { CustomViewProps } from '../ui-components.types'
import { makeBaseViewStyle, styles } from '../styles'

export function Center(props: CustomViewProps) {
  const baseStyle = makeBaseViewStyle(props)
  let centerStyles = StyleSheet.compose(baseStyle, styles.center)

  if (props.style) {
    centerStyles = StyleSheet.compose(centerStyles, props.style)
  }

  return <View style={centerStyles}>{props.children}</View>
}
