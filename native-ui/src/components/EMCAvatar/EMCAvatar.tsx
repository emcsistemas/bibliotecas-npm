import { Image } from 'react-native'
import EMCBox from '../EMCBox/EMCBox'
import { CustomImageProps } from '../../styles/ui-components.types'
import { convertBorderRadius, dimensionCalculate } from '../../styles/ui-components.util'

const EMCAvatar = (props: CustomImageProps) => {
  return (
    <EMCBox 
      bg={props.bg}
      w={props.w}
      h={props.h}
      align='center'
      justify='center'
      m={props.m}  
      mt={props.mt}
      mb={props.mb}
      ml={props.ml}
      mr={props.mr}
      bColor={props.bColor}
      bWidth={props.bWidth}
      rounded={props.rounded ?? 'full'}
    >
      <Image
        resizeMode='contain'
        style={{
            width: dimensionCalculate(props.w), 
            height: dimensionCalculate(props.h), 
            borderRadius: convertBorderRadius(props.rounded ?? 'full')
        }}
        alt={props.alt}
        source={{ uri: props.source.uri }}
      />
    </EMCBox>
  )
}

export default EMCAvatar