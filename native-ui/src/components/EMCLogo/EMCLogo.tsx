import { Image, StyleSheet } from 'react-native'
import { Colors } from '../../theme'
import EMCBox from '../EMCBox'

type EMCLogoProps = {
  size: number
  logoType?: 'blue' | 'white'
  logoBase64?: string | null
  m?: number
  mt?: number
  mb?: number
  ml?: number
  mr?: number
}

const EMCLogo = (props: EMCLogoProps) => {
  const styles = StyleSheet.create({
    logo: {
      width: 36,
      height: 36,
      resizeMode: 'contain',
    },
  })

  return (
    <EMCBox
      w={props.size}
      h={props.size}
      align='center'
      justify='center'
      rounded='full'
      bWidth={1}
      bColor={Colors.gray[50]}
      {...props}
    >
      <Image
        alt='Logomarca'
        style={styles.logo}
        source={
          props.logoBase64
            ? { uri: 'data:image/png;base64,' + props.logoBase64 }
            : props.logoType === 'white'
            ? require('./assets/logo-redondo-bc.png')
            : require('./assets/logo-redondo-az.png')
        }
        defaultSource={
          props.logoBase64
            ? { uri: 'data:image/png;base64,' + props.logoBase64 }
            : props.logoType === 'white'
            ? require('./assets/logo-redondo-bc.png')
            : require('./assets/logo-redondo-az.png')
        }
      />
    </EMCBox>
  )
}

export default EMCLogo
