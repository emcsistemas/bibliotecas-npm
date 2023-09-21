import { View, StyleSheet } from 'react-native'

import { CustomViewProps } from '../../styles/ui-components.types'
import { styles, makeBaseViewStyle } from '../../styles/styles'

const Box = (props: CustomViewProps) => {
  let boxStyles = StyleSheet.compose(styles.box, makeBaseViewStyle(props))

  if (props.style) {
    boxStyles = StyleSheet.compose(boxStyles, props.style)
  }

  return <View style={boxStyles}>{props.children}</View>
}

export default Box