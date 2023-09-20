import { Image, StyleSheet } from 'react-native'
import { Box } from '../Box'
import { makeBaseImageStyle, styles } from '../styles'
import { CustomImageProps } from '../ui-components.types'

export function Avatar(props: CustomImageProps) {
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
