import { ScrollView } from 'react-native'
import { CustomScrollViewContainerProps } from '../../styles/Types/ui-components.types'
import { makeBaseScrollViewContainerStyle, styles } from '../../styles/styles.factory'

const EMCScrollView = (props: CustomScrollViewContainerProps) => {
  const scrollViewContainerStyle = props.contentContainerStyle ?? makeBaseScrollViewContainerStyle(props)

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={scrollViewContainerStyle}
      showsVerticalScrollIndicator={false}
      {...props}
    >
      {props.children}
    </ScrollView>
  )
}

export default EMCScrollView