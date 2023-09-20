import { ScrollView as RNScrollView } from 'react-native'
import { CustomScrollViewProps } from '../ui-components.types'
import { makeBaseScrollViewContainerStyle } from '../styles'

export function ScrollView(props: CustomScrollViewProps) {
  const scrollViewStyle = makeBaseScrollViewContainerStyle(props)

  return (
    <RNScrollView
      style={{ flex: props.flex }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={scrollViewStyle}
      {...props}
    >
      {props.children}
    </RNScrollView>
  )
}
