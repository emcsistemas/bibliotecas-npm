import { Image } from 'react-native'
import Box from '../Box/Box'
import { CustomImageProps } from '../../styles/ui-components.types'
import { convertBorderRadius, dimensionCalculate } from '../../styles/ui-components.util'

const Avatar = (props: CustomImageProps) => {
  return (
    <Box 
      bg={props.bg}
      w={props.w}
      h={props.h}
      alignItems='center'
      justifyContent='center'
      m={props.m}  
      mt={props.mt}
      mb={props.mb}
      ml={props.ml}
      mr={props.mr}
      bColor={props.bColor}
      bWidth={props.bWidth}
      rounded={props.rounded}
    >
      <Image
        resizeMode='contain'
        style={{
            width: dimensionCalculate(props.w), 
            height: dimensionCalculate(props.h), 
            borderRadius: convertBorderRadius(props.rounded)
        }}
        alt={props.alt}
        source={{ uri: props.source.uri }}
      />
    </Box>
  )
}

export default Avatar