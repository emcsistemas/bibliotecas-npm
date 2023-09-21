import { ScrollView } from 'react-native'
import { CustomScrollViewProps } from '../../styles/ui-components.types'
import { makeBaseScrollViewContainerStyle } from '../../styles/styles'

const EMCScrollView = (props: CustomScrollViewProps) => {
  const scrollViewStyle = makeBaseScrollViewContainerStyle(props)

  return (
    <ScrollView
      style={{ flex: props.flex }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={scrollViewStyle}
      {...props}
    >
      {props.children}
    </ScrollView>
  )
}

export default EMCScrollView