import React from "react"
import { Platform } from "react-native"
import AnimatedLottieView from 'lottie-react-native'
import { Colors } from "../../theme"
import EMCText from "../EMCText"
import EMCVStack from "../EMCVStack"

interface EMCWaitProps {
  waitMessage: string
  subTitle?: string
  showAnimation?: boolean
}

const EMCWait = ({ waitMessage, subTitle, showAnimation }: EMCWaitProps) => {
  return (
    <EMCVStack
      position='absolute'
      left={0}
      top={0}
      w='full'
      h='full'
      bg='rgba(0,0,0,0.7)'
      align='center'
      justify='center'
    >
      {showAnimation && (
        <AnimatedLottieView
          autoPlay
          loop
          style={{
            width: 100,
            height: 100,
          }}
          source={
            Platform.OS === 'android'
              ? require('../../assets/loading-cubes-droid.json')
              : require('../../assets/loading-cubes.json')
          }
        />
      )}
      <EMCText fColor={Colors.white}>{waitMessage}</EMCText>
      {subTitle && (
        <EMCText
          mt={1}
          fColor={Colors.white}
        >
          {subTitle}
        </EMCText>
      )}
    </EMCVStack>
  )
}

export default EMCWait
