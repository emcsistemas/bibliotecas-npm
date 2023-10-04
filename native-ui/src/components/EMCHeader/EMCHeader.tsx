import React from 'react'
import { ActivityIndicator, ColorValue, Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Colors } from "../../theme"
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import EMCHStack from '../EMCHStack'
import EMCIcon from '../EMCIcon'
import EMCText from '../EMCText'
import EMCVStack from '../EMCVStack'
import Consts from '../../styles/Consts'
import EMCLogo from '../EMCLogo'

interface EMCHeaderProps {
  title: string
  subtitle?: string
  footer?: string
  goBack?: boolean
  menu?: boolean
  send?: boolean
  sending?: boolean
  logo?: boolean
  isTablet?: boolean
  colorSubtitle?: ColorValue
  logoBase64?: string
  fontSize: 'lg' | 'md' | 'sm' | 'xl' | 'xs'
  fontSizeSt?: 'lg' | 'md' | 'sm' | 'xl' | 'xs'
  fontSizeFo?: 'lg' | 'md' | 'sm' | 'xl' | 'xs'
  onPress?(): void
  onPressSec?(): void
  handleOpenMenu?(): void
}

const EMCHeader = (props: EMCHeaderProps) => {
  const insets = useSafeAreaInsets()

  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.blue[400],
      paddingTop: insets.top,
    },
  })

  return (
    <View style={styles.container}>
      <EMCVStack
        bg={Colors.blue[400]}
        justify='center'
        style={{
          zIndex: 1,
          height: props.isTablet ? 56 : 48,
          paddingBottom: 6,
          paddingHorizontal: Platform.OS === 'android' ? 24 : 20,
        }}
      >
        <EMCHStack align='center'>
          {props.logo && !props.goBack && (
            <EMCLogo
              size={props.isTablet ? 10 : 9}
              logoType='white'
              logoBase64={props.logoBase64}
              mr={4}
            />
          )}
          {props.goBack && (
            <TouchableOpacity
              activeOpacity={Consts.DEFAULT_OPACITY_CLICK}
              onPress={props.onPress}
            >
              <EMCIcon
                as={Ionicons}
                name='arrow-back'
                color={Colors.white}
                size={7}
                mr={4}
              />
            </TouchableOpacity>
          )}
          <EMCVStack flex={1}>
            <EMCText
              fColor={Colors.white}
              fSize={props.fontSize}
              fWeight='bold'
            >
              {props.title}
            </EMCText>
            {props.subtitle && props.subtitle.trim() !== '' && (
              <EMCText
                fColor={props.colorSubtitle || Colors.white}
                fSize={props.fontSizeSt || props.fontSize}
              >
                {props.subtitle}
              </EMCText>
            )}
            {props.footer && props.footer.trim() !== '' && (
              <EMCText
                fColor={Colors.white}
                fSize={props.fontSizeFo || props.fontSize}
              >
                {props.footer}
              </EMCText>
            )}
          </EMCVStack>
          {props.menu && props.handleOpenMenu ? (
            <TouchableOpacity
              activeOpacity={Consts.DEFAULT_OPACITY_CLICK}
              onPress={props.handleOpenMenu}
            >
              <EMCIcon
                as={MaterialIcons}
                name='menu'
                color={Colors.light[50]}
                size={7}
              />
            </TouchableOpacity>
          ) : props.sending ? (
            <ActivityIndicator
              size='small'
              color={Colors.white}
            />
          ) : (
            props.send && (
              <TouchableOpacity
                activeOpacity={Consts.DEFAULT_OPACITY_CLICK}
                onPress={props.onPressSec || props.onPress}
              >
                <EMCIcon
                  as={FontAwesome}
                  name='send'
                  color={Colors.white}
                  size={6}
                />
              </TouchableOpacity>
            )
          )}
        </EMCHStack>
      </EMCVStack>
    </View>
  )
}

export default EMCHeader
