import { View } from 'react-native'

import { CustomViewProps } from '../../styles/ui-components.types'
import { makeBaseViewStyle } from '../../styles/styles'

const EMCVStack = (props: CustomViewProps) => {
  let baseStyle = props.style ?? makeBaseViewStyle(props)

  return <View style={[baseStyle, { flexDirection: 'column' }]} {...props}>{props.children}</View>
}

export default EMCVStack
