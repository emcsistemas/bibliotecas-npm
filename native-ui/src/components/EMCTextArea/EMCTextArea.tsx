import { TextInput, StyleSheet } from 'react-native'
import { TextAreaProps } from '../../styles/ui-components.types'
import { makeBaseTextAreaStyle, styles } from '../../styles/styles'

const EMCTextArea = (props: TextAreaProps) => {
  const textAreaStyle = StyleSheet.compose(
    styles.textArea,
    makeBaseTextAreaStyle(props),
  )

  return <TextInput multiline style={textAreaStyle} {...props} />
}

export default EMCTextArea