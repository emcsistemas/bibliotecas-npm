import { ActivityIndicator, ColorValue, DimensionValue } from 'react-native'
import { Box } from '../Box'

type SpinnerProps = {
  children?: React.ReactNode
  color?: ColorValue
  size?: 'sm' | 'lg'
  m?: DimensionValue
  mx?: DimensionValue
  my?: DimensionValue
  mt?: DimensionValue
  mb?: DimensionValue
  ml?: DimensionValue
  mr?: DimensionValue
}

export function Spinner(props: SpinnerProps) {
  return (
    <Box
      m={props.m}
      mx={props.mx}
      my={props.my}
      mt={props.mt}
      mb={props.mb}
      ml={props.ml}
      mr={props.mr}
    >
      <ActivityIndicator
        color={props.color}
        size={!props.size || props.size === 'sm' ? 'small' : 'large'}
      />
      {props.children}
    </Box>
  )
}
