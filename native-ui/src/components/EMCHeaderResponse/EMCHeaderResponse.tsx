import { Platform, View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from "react-native-safe-area-context"
import LottieView from "lottie-react-native"
import { Colors } from "../../theme"
import EMCBox from "../EMCBox"
import EMCText from "../EMCText"

interface EMCHeaderResponseProps {
  responseType: 'success' | 'error'
  title: string
  isTablet?: boolean
}

const EMCHeaderResponse = ({
  responseType,
  title,
  isTablet,
}: EMCHeaderResponseProps) => {
  const insets = useSafeAreaInsets()

  const styles = StyleSheet.create({
    container: {
      height: isTablet ? '20%' : undefined,
      backgroundColor:
        responseType === 'error' ? Colors.red[600] : Colors.blue[400],
      paddingTop: isTablet
        ? 0
        : Platform.OS === 'android'
        ? 0
        : insets.top,
      paddingBottom: isTablet ? undefined : 12,
      justifyContent: isTablet ? 'center' : undefined,
    },
  })

  return (
    <View style={styles.container}>
      <EMCBox
        w='full'
        align='center'
        justify='center'
      >
        <LottieView
          autoPlay
          speed={1.3}
          loop={false}
          style={{
            width: responseType !== 'error' ? 100 : 90,
            height: responseType !== 'error' ? 100 : 90,
          }}
          source={
            responseType !== 'error'
              ? require('../../assets/success-200.json')
              : require('../../assets/fail.json')
          }
        />
        <EMCText
          fColor={Colors.light[50]}
          fWeight='bold'
        >
          {title}
        </EMCText>
      </EMCBox>
    </View>
  )
}

export default EMCHeaderResponse
