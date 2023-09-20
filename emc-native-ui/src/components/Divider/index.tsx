import { View, StyleSheet } from 'react-native'

import { CustomDividerProps } from '../ui-components.types'
import { makeBaseDividerStyle, styles } from '../styles'

export function Divider(props: CustomDividerProps) {
  const dividerProps = StyleSheet.compose(
    makeBaseDividerStyle(props),
    styles.divider,
  )

  return <View style={dividerProps} />
}
