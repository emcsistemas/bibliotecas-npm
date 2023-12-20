import { PressableProps, View, StyleSheet } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { CustomIconProps } from '../../styles'
import { Colors } from '../../theme'
import EMCButton from "../EMCButton/EMCButton"
import EMCIcon from "../EMCIcon"
import EMCText from "../EMCText"
import EMCVStack from "../EMCVStack"
import { SvgProps } from 'react-native-svg'

interface EMCButtonMenuProps extends PressableProps {
  title?: string
  icon?: CustomIconProps
  SvgIcon?: React.FC<SvgProps>
  variant?: 'blue' | 'light-blue' | 'orange' | 'red'
  marginL?: boolean
  marginR?: boolean
  isDisabled?: boolean
  bagNumber?: number
  bagColor?: string
  isTablet?: boolean
}

const EMCButtonMenu = ({
  title,
  icon,
  SvgIcon,
  variant,
  isDisabled,
  bagNumber,
  bagColor,
  marginL,
  marginR,
  isTablet,
  ...rest
}: EMCButtonMenuProps) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft: marginL ? (isTablet ? 12 : 8) : 0,
      marginRight: marginR ? (isTablet ? 12 : 8) : 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:
        variant === 'light-blue' ? Colors.blue[300] : Colors.blue[400],
      borderRadius: 12,
      shadowColor: '#000000',
      shadowOffset: {
        width: -1,
        height: 4,
      },
      shadowOpacity: 0.4,
      shadowRadius: 5,
      elevation: 5,
    },
    bag: {
      position: 'absolute',
      zIndex: 1,
      top: 10,
      right: 10,
      width: isTablet ? 24 : 20,
      height: isTablet ? 24 : 20,
      borderRadius: isTablet ? 12 : 10,
      backgroundColor: bagColor || Colors.red[500],
      alignItems: 'center',
      justifyContent: 'center',
    },
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
    <Animated.View style={[styles.container, animatedStyle]}>
      {bagNumber && (
        <View style={styles.bag}>
          <EMCText
            fSize={isTablet ? 'xs' : '2xs'}
            fColor={Colors.white}
            fWeight='bold'
          >
            {bagNumber > 99 ? '+99' : bagNumber}
          </EMCText>
        </View>
      )}
      <EMCButton
        w='full'
        h='full'
        rounded='lg'
        noPressedEffect
        bg={
          isDisabled
            ? Colors.blue[400]
            : variant === 'orange'
            ? Colors.warning[600]
            : variant === 'light-blue'
            ? Colors.blue[300]
            : variant === 'red'
            ? Colors.red[600]
            : Colors.blue[400]
        }
        onPressIn={
          isDisabled
            ? undefined
            : () => {
                scale.value = withSpring(1.05, { mass: 0.1 })
              }
        }
        onPressOut={
          isDisabled
            ? undefined
            : () => {
                scale.value = withSpring(1, { mass: 0.1 })
              }
        }
        {...rest}
      >
        <EMCVStack
          align='center'
          justify='center'
        >
          {icon && (
            <EMCIcon
              as={icon.as}
              name={icon.name}
              size={isTablet ? 18 : 15}
              color={Colors.light[50]}
              opacity={isDisabled ? 0.3 : 1}
            />
          )}
          {!icon && SvgIcon && <SvgIcon />}
          {title && (
            <EMCText
              mt={1}
              fSize={isTablet ? 17 : 14}
              fColor={Colors.light[50]}
              fWeight='bold'
              opacity={isDisabled ? 0.3 : 1}
            >
              {title}
            </EMCText>
          )}
        </EMCVStack>
      </EMCButton>
    </Animated.View>
  )
}

export default EMCButtonMenu
