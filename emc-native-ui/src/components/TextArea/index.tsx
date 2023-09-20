import { TextInput, StyleSheet } from 'react-native'
import { TextAreaProps } from '../ui-components.types'
import { makeBaseTextAreaStyle, styles } from '../styles'

export function TextArea(props: TextAreaProps) {
  const textAreaStyle = StyleSheet.compose(
    styles.textArea,
    makeBaseTextAreaStyle(props),
  )

  return <TextInput multiline style={textAreaStyle} {...props} />
}
