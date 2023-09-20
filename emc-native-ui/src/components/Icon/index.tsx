import { Box } from '../Box'
import { CustomIconProps } from '../ui-components.types'
import { iconSizeCalculate } from '../ui-components.util'
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  Fontisto,
  FontAwesome,
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from '@expo/vector-icons'

export function Icon(props: CustomIconProps) {
  let icon: React.JSX.Element = <></>

  switch (props.as) {
    case AntDesign:
      icon = (
        <AntDesign
          name={props.name}
          size={iconSizeCalculate(props.size)}
          color={props.color}
          style={{
            opacity: props.opacity,
          }}
        />
      )
      break
    case Entypo:
      icon = (
        <Entypo
          name={props.name}
          size={iconSizeCalculate(props.size)}
          color={props.color}
          style={{
            opacity: props.opacity,
          }}
        />
      )
      break
    case EvilIcons:
      icon = (
        <EvilIcons
          name={props.name}
          size={iconSizeCalculate(props.size)}
          color={props.color}
          style={{
            opacity: props.opacity,
          }}
        />
      )
      break
    case Feather:
      icon = (
        <Feather
          name={props.name}
          size={iconSizeCalculate(props.size)}
          color={props.color}
          style={{
            opacity: props.opacity,
          }}
        />
      )
      break
    case Fontisto:
      icon = (
        <Fontisto
          name={props.name}
          size={iconSizeCalculate(props.size)}
          color={props.color}
          style={{
            opacity: props.opacity,
          }}
        />
      )
      break
    case FontAwesome:
      icon = (
        <FontAwesome
          name={props.name}
          size={iconSizeCalculate(props.size)}
          color={props.color}
          style={{
            opacity: props.opacity,
          }}
        />
      )
      break
    case FontAwesome5:
      icon = (
        <FontAwesome5
          name={props.name}
          size={iconSizeCalculate(props.size)}
          color={props.color}
          style={{
            opacity: props.opacity,
          }}
        />
      )
      break
    case Foundation:
      icon = (
        <Foundation
          name={props.name}
          size={iconSizeCalculate(props.size)}
          color={props.color}
          style={{
            opacity: props.opacity,
          }}
        />
      )
      break
    case Ionicons:
      icon = (
        <Ionicons
          name={props.name}
          size={iconSizeCalculate(props.size)}
          color={props.color}
          style={{
            opacity: props.opacity,
          }}
        />
      )
      break
    case MaterialCommunityIcons:
      icon = (
        <MaterialCommunityIcons
          name={props.name}
          size={iconSizeCalculate(props.size)}
          color={props.color}
          style={{
            opacity: props.opacity,
          }}
        />
      )
      break
    case MaterialIcons:
      icon = (
        <MaterialIcons
          name={props.name}
          size={iconSizeCalculate(props.size)}
          color={props.color}
          style={{
            opacity: props.opacity,
          }}
        />
      )
      break
    case Octicons:
      icon = (
        <Octicons
          name={props.name}
          size={iconSizeCalculate(props.size)}
          color={props.color}
          style={{
            opacity: props.opacity,
          }}
        />
      )
      break
    case SimpleLineIcons:
      icon = (
        <SimpleLineIcons
          name={props.name}
          size={iconSizeCalculate(props.size)}
          color={props.color}
          style={{
            opacity: props.opacity,
          }}
        />
      )
      break
    case Zocial:
      icon = (
        <Zocial
          name={props.name}
          size={iconSizeCalculate(props.size)}
          color={props.color}
          style={{
            opacity: props.opacity,
          }}
        />
      )
  }

  return (
    <Box m={props.m} mt={props.mt} mb={props.mb} ml={props.ml} mr={props.mr}>
      {icon}
    </Box>
  )
}
