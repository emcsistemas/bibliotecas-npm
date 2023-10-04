import { TouchableOpacityProps, StyleSheet, TouchableOpacity } from 'react-native'
import EMCIcon from '../EMCIcon'
import EMCVStack from '../EMCVStack'
import { Colors } from '../../theme'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { CustomIconProps } from '../../styles'

interface CircularButtonProps extends TouchableOpacityProps {
  icon:  CustomIconProps
  size?: number
  left?: number
  top?: number
  right?: number
  bottom?: number
  isTablet?: boolean
  showShadow?: boolean
}

const EMCCircularButton = ({
  icon,
  size,
  left,
  top,
  right,
  bottom,
  isTablet,
  showShadow,
  ...rest
}: CircularButtonProps) => {
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
    }    
  })

  const scale = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value,
        },
      ],
    }
  })

  return (
    <Animated.View
      style={[styles.container, { left, top, right, bottom }, animatedStyle]}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPressIn={() => {
          scale.value = withSpring(1.15, { mass: 0.1 })
        }}
        onPressOut={() => {
          scale.value = withSpring(1, { mass: 0.1 })
        }}
        {...rest}
      >
        <EMCVStack
          w={size ?? isTablet ? 18 : 16}
          h={size ?? isTablet ? 18 : 16}
          rounded='full'
          align='center'
          justify='center'
          bg={Colors.blue[400]}
          showShadow={showShadow}
        >
          <EMCIcon
            as={icon.as}
            name={icon.name}
            size={icon.size ?? isTablet ? 9 : 8}
            color={icon.color ?? Colors.light[50]}
          />
        </EMCVStack>
      </TouchableOpacity>
    </Animated.View>
  )
}

export default EMCCircularButton
