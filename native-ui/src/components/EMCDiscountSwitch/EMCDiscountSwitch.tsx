import { memo } from 'react'
import { View, Pressable, StyleSheet } from 'react-native'
import { Feather, MaterialIcons } from '@expo/vector-icons'
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { Colors } from '../../theme'
import EMCIcon from '../EMCIcon'

type SwitchOptionProps = {
  onPress(): void
}

interface EMCDiscountSwitchProps {
  swicthSize: '2xs' | 'xs' | 'sm' | 'md' | 'lg'
  leftOption: SwitchOptionProps
  rightOption: SwitchOptionProps
  isDisabled?: boolean
  positionIndex?: 0 | 1
}

const EMCDiscountSwitch = ({
  swicthSize,
  leftOption,
  rightOption,
  isDisabled,
  positionIndex,
}: EMCDiscountSwitchProps) => {
  const is2Xs = swicthSize === '2xs'
  const isXs = swicthSize === 'xs'
  const isSm = swicthSize === 'sm'
  const isMd = swicthSize === 'md'

  const TRACK_WIDTH = is2Xs ? 84 : isXs ? 96 : isSm ? 100 : 104
  const TOOGLE_SIZE = is2Xs ? 30 : isXs ? 34 : isSm ? 38 : isMd ? 42 : 46
  const TRACK_PADDING = 1.5
  const MIN_POSITION = 0.5
  const MAX_POSITION =
    TRACK_WIDTH -
    TOOGLE_SIZE -
    TRACK_PADDING -
    (is2Xs ? 15 : isXs ? 17 : isSm ? 15 : isMd ? 13 : 9)

  function handleLeftOptionPress() {
    position.value = withTiming(MIN_POSITION)
    leftOption.onPress()
  }

  function handleRightOptionPress() {
    position.value = withTiming(MAX_POSITION)
    rightOption.onPress()
  }

  const styles = StyleSheet.create({
    container: {
      width: TRACK_WIDTH,
      height: TOOGLE_SIZE + TRACK_PADDING * 2,
      justifyContent: 'center',
    },
    track: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 5,
      backgroundColor: Colors.gray[300],
    },
    toogle: {
      position: 'absolute',
      left: MIN_POSITION + TRACK_PADDING,
      top: TRACK_PADDING * 2,
      width: TRACK_WIDTH / 2,
      height: TOOGLE_SIZE - TRACK_PADDING * 2,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: isDisabled ? 0.3 : 1,
    },
    toogleBackground: {
      backgroundColor: Colors.blue[400],
    },
    iconLeft: {
      position: 'absolute',
      left:
        TRACK_PADDING * 2 + (is2Xs ? 5.5 : isXs ? 6 : isSm ? 5 : isMd ? 4 : 2),
      top: TRACK_PADDING / 2,
      width: TOOGLE_SIZE,
      height: TOOGLE_SIZE,
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconRight: {
      position: 'absolute',
      right: TRACK_PADDING + (is2Xs ? 6 : isXs ? 7 : isSm ? 6 : isMd ? 5 : 3),
      top: TRACK_PADDING / 2,
      width: TOOGLE_SIZE,
      height: TOOGLE_SIZE,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

  const currentPosition = useSharedValue(positionIndex === 1 ? MAX_POSITION : 0)
  const position = useSharedValue(positionIndex === 1 ? MAX_POSITION : 0)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: position.value,
        },
      ],
    }
  })

  const panGesture = Gesture.Pan()
    .onBegin(() => {
      if (position.value < MIN_POSITION) {
        currentPosition.value = MIN_POSITION
      } else if (position.value > MAX_POSITION) {
        currentPosition.value = MAX_POSITION
      } else {
        currentPosition.value = position.value
      }
    })
    .onUpdate((e) => {
      const positionX = currentPosition.value + e.translationX
      if (positionX >= MIN_POSITION - 4 && positionX <= MAX_POSITION) {
        position.value = positionX
      }
    })
    .onEnd(() => {
      if (position.value > TRACK_WIDTH / 2 - TOOGLE_SIZE / 2) {
        position.value = withTiming(MAX_POSITION)
        runOnJS(handleRightOptionPress)()
      } else {
        position.value = withTiming(MIN_POSITION)
        runOnJS(handleLeftOptionPress)()
      }
    })

  return (
    <View style={styles.container}>
      <View style={styles.track} />
      {!isDisabled ? (
        <Animated.View
          style={[styles.toogle, styles.toogleBackground, animatedStyle]}
        />
      ) : (
        <View style={[styles.toogle, styles.toogleBackground]} />
      )}
      <View style={styles.iconLeft}>
        <Pressable onPress={isDisabled ? undefined : handleLeftOptionPress}>
          <EMCIcon
            as={Feather}
            name='percent'
            size={is2Xs ? 4 : isSm || isXs ? 5 : 6}
            color={Colors.light[50]}
          />
        </Pressable>
      </View>
      <View style={styles.iconRight}>
        <Pressable onPress={isDisabled ? undefined : handleRightOptionPress}>
          <EMCIcon
            as={MaterialIcons}
            name='attach-money'
            size={is2Xs ? 5 : isSm || isXs ? 6 : 7}
            color={Colors.light[50]}
          />
        </Pressable>
      </View>
      {!isDisabled && (
        <GestureDetector gesture={panGesture}>
          <Animated.View style={[styles.toogle, animatedStyle]} />
        </GestureDetector>
      )}
    </View>
  )
}

export default memo(EMCDiscountSwitch)
