import { Text } from 'react-native'
import { CustomTextProps } from '../../styles/Types/ui-components.types'
import { makeBaseTextStyle } from '../../styles/styles.factory'

const EMCText = (props: CustomTextProps) => {
  const baseStyle = props.style ?? makeBaseTextStyle(props)

  return (
    <Text
      maxFontSizeMultiplier={props.noAccessibility ? 1 : undefined}
      style={baseStyle}
      {...props}
      numberOfLines={props.wordWrap ? undefined : 1}
    >
      {props.children}
    </Text>
  )
}

export default EMCText