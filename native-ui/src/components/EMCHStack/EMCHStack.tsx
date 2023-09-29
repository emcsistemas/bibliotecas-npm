import { View, StyleSheet } from 'react-native'

import { CustomViewProps } from '../../styles/ui-components.types'
import { makeBaseViewStyle, styles } from '../../styles/styles'

const EMCHStack = (props: CustomViewProps) => {
  let baseStyle = props.style
    ? StyleSheet.compose(props.style, styles.hstack)
    : StyleSheet.compose(makeBaseViewStyle(props), styles.hstack)

  if (props.style) {  
    console.log(baseStyle)
  }
  
  return <View style={baseStyle} {...props}>{props.children}</View>
}

export default EMCHStack