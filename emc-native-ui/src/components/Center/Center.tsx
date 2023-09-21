import { View, StyleSheet } from 'react-native'

import { CustomViewProps } from '../../styles/ui-components.types'
import { makeBaseViewStyle, styles } from '../../styles/styles'

const Center = (props: CustomViewProps) => {
  const baseStyle = makeBaseViewStyle(props)
  let centerStyles = StyleSheet.compose(baseStyle, styles.center)

  if (props.style) {
    centerStyles = StyleSheet.compose(centerStyles, props.style)
  }

  return <View style={centerStyles}>{props.children}</View>
}

export default Center