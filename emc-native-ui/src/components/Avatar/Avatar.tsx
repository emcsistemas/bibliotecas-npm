import { Image, StyleSheet } from 'react-native'
import Box from '../Box/Box'
import { styles, makeBaseImageStyle } from '../../styles/styles'
import { CustomImageProps } from '../../styles/ui-components.types'

const Avatar = (props: CustomImageProps) => {
  const containerStyles = StyleSheet.compose(
    styles.box,
    makeBaseImageStyle(props),
  )

  return (
    <Box style={containerStyles}>
      <Image alt={props.alt} source={{ uri: props.source.uri }} />
    </Box>
  )
}

export default Avatar