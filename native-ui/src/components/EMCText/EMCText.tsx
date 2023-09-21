import { StyleSheet, Text } from 'react-native'
import { CustomTextProps } from '../../styles/ui-components.types'
import { styles, makeBaseTextStyle } from '../../styles/styles'

const EMCText = (props: CustomTextProps) => {
  const textStyles = StyleSheet.compose(styles.text, makeBaseTextStyle(props))

  return (
    <Text
      style={textStyles}
      maxFontSizeMultiplier={props.noAccessibility ? 1 : undefined}
      numberOfLines={props.wordWrap ? undefined : 1}
      {...props}
    >
      {props.children}
    </Text>
  )
}

export default EMCText