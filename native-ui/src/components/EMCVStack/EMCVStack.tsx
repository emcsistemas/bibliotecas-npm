import { View } from 'react-native'

import { CustomViewProps } from '../../styles/Types/ui-components.types'
import { makeBaseViewStyle } from '../../styles/styles.factory'

const EMCVStack = (props: CustomViewProps) => {
  let baseStyle = props.style ?? makeBaseViewStyle(props)

  return (
    <View
      style={[baseStyle, { flexDirection: 'column' }]}
    >
      {props.children}
    </View>
  )
}

export default EMCVStack
