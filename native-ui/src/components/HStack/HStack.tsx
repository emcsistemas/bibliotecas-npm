import { View, StyleSheet } from 'react-native'

import { CustomViewProps } from '../../styles/ui-components.types'
import { makeBaseViewStyle, styles } from '../../styles/styles'

const HStack = (props: CustomViewProps) => {
  let viewStyles = StyleSheet.compose(makeBaseViewStyle(props), styles.hstack)

  if (props.style) {
    viewStyles = StyleSheet.compose(viewStyles, props.style)
  }

  return <View style={viewStyles}>{props.children}</View>
}

export default HStack