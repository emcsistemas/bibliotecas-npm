import { View, StyleSheet } from 'react-native'

import { CustomDividerProps } from '../../styles/ui-components.types'
import { makeBaseDividerStyle, styles } from '../../styles/styles'

const Divider = (props: CustomDividerProps) => {
  const dividerProps = StyleSheet.compose(
    makeBaseDividerStyle(props),
    styles.divider,
  )

  return <View style={dividerProps} />
}

export default Divider