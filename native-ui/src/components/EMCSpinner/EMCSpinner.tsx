import { ActivityIndicator, ColorValue, DimensionValue } from 'react-native'
import EMCBox from '../EMCBox/EMCBox'

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

const EMCSpinner = (props: SpinnerProps) => {
  return (
    <EMCBox
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
    </EMCBox>
  )
}

export default EMCSpinner