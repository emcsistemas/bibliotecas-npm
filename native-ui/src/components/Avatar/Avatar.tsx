import { Image, StyleSheet } from 'react-native'
import Box from '../Box/Box'
import { styles, makeBaseImageStyle } from '../../styles/styles'
import { CustomImageProps } from '../../styles/ui-components.types'
import { dimensionCalculate } from '../../styles/ui-components.util'

const Avatar = (props: CustomImageProps) => {
  const containerStyles = StyleSheet.compose(
    styles.box,
    makeBaseImageStyle(props),
  )

  return (
    <Box style={containerStyles}>
      <Image
        resizeMode='contain'
        style={{width: dimensionCalculate(props.w), height: dimensionCalculate(props.h)}}
        alt={props.alt}
        source={{ uri: props.source.uri }}
      />
    </Box>
  )
}

export default Avatar