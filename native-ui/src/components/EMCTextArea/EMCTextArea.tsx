import { TextInput } from 'react-native'
import { CustomTextAreaProps } from '../../styles/ui-components.types'
import { makeBaseTextAreaStyle } from '../../styles/styles'

const EMCTextArea = (props: CustomTextAreaProps) => {
  const baseStyle = props.style ?? makeBaseTextAreaStyle(props)

  return (
    <TextInput
      multiline
      style={baseStyle}
      {...props}
    />
  )
}

export default EMCTextArea