import { Platform, View, TouchableOpacity, StyleSheet, ColorValue } from 'react-native'
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { CustomIconProps, FontSizeAcronymes, FontWeightAcronymes } from "../../styles"
import { Colors } from "../../theme"
import EMCBox from "../EMCBox"
import EMCHStack from "../EMCHStack"
import EMCIcon from "../EMCIcon"
import EMCSpinner from "../EMCSpinner"
import EMCText from "../EMCText"
import EMCVStack from "../EMCVStack"
import Consts from '../../styles/Consts'

interface EMCHeaderSimpleProps {
  leftOption?: {
    title?: string
    icon?: CustomIconProps
    onPress(): void
  }
  rightOption?: {
    title?: string
    icon?: CustomIconProps
    loading?: boolean
    disabled?: boolean
    onPress(): void
  }
  centerTitle?: string
  leftTitle?: {
    title: string
    fSize?: FontSizeAcronymes | number
    fColor?: ColorValue
    fWeight?: FontWeightAcronymes
  }
  centerSubTitle?: string
  leftSubTitle?: {
    title: string
    fSize?: FontSizeAcronymes | number
    fColor?: ColorValue
    fWeight?: FontWeightAcronymes
  }
  titleBold?: boolean
  isModal?: boolean
  isTablet?: boolean
}

const EMCHeaderSimple = ({
  leftOption,
  rightOption,
  centerTitle,
  centerSubTitle,
  leftTitle,
  leftSubTitle,
  titleBold,
  isModal,
  isTablet,
}: EMCHeaderSimpleProps) => {
  const insets = useSafeAreaInsets()

  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.blue[400],
      paddingTop: isModal && Platform.OS === 'android' ? 4 : insets.top + (Platform.OS === 'android' ? 4 : 0),
    },
  })

  return (
    <View style={styles.container}>
      <EMCVStack
        style={{
          zIndex: 1,
          justifyContent: 'center',
          backgroundColor: Colors.blue[400],
          height: isTablet ? 56 : Platform.OS === 'android' ? 44 : 48,
          paddingBottom: isTablet ? 6 : 4,
          paddingHorizontal: 20,
        }}
      >
        <EMCHStack
          align='center'
          justify='space-between'
        >
          <EMCBox w={10}>
            {leftOption && (
              <TouchableOpacity
                activeOpacity={Consts.DEFAULT_OPACITY_CLICK}
                onPress={() => leftOption.onPress()}
              >
                {leftOption.icon ? (
                  <EMCIcon
                    as={leftOption.icon?.as}
                    name={leftOption.icon?.name}
                    size={leftOption.icon?.size || 6}
                    color={Colors.light[50]}
                  />
                ) : (
                  <EMCText fColor={Colors.light[50]}>
                    {leftOption.title}
                  </EMCText>
                )}
              </TouchableOpacity>
            )}
          </EMCBox>
          <EMCVStack
            flex={1}
            align='center'
          >
            {centerTitle && (
              <EMCText
                fColor={Colors.light[50]}
                fSize={isTablet ? 'lg' : 'md'}
                fWeight={titleBold ? 'bold' : 'normal'}
              >
                {centerTitle}
              </EMCText>
            )}
            {leftTitle && !centerTitle && (
              <EMCBox
                w={'full'}
                align='flex-start'
              >
                <EMCText
                  fColor={leftTitle.fColor || Colors.light[50]}
                  fSize={leftTitle.fSize || (isTablet ? 'lg' : 'md')}
                  fWeight={leftTitle.fWeight}
                >
                  {leftTitle.title}
                </EMCText>
              </EMCBox>
            )}
            {centerSubTitle && (
              <EMCText
                fColor={Colors.light[50]}
                fSize={isTablet ? 'lg' : 'md'}
              >
                {centerSubTitle}
              </EMCText>
            )}
            {leftSubTitle && !centerSubTitle && (
              <EMCBox
                w={'full'}
                align='flex-start'
              >
                <EMCText
                  fColor={leftSubTitle.fColor || Colors.light[50]}
                  fSize={leftSubTitle.fSize || (isTablet ? 'lg' : 'md')}
                  fWeight={leftSubTitle.fWeight}
                >
                  {leftSubTitle.title}
                </EMCText>
              </EMCBox>
            )}
          </EMCVStack>
          <EMCBox
            w={10}
            align='flex-end'
          >
            {rightOption &&
              (rightOption.loading ? (
                <EMCSpinner
                  color={Colors.light[50]}
                  size='sm'
                />
              ) : (
                <TouchableOpacity
                  activeOpacity={
                    rightOption.disabled ? 1 : Consts.DEFAULT_OPACITY_CLICK
                  }
                  onPress={
                    rightOption.disabled
                      ? undefined
                      : () => rightOption.onPress()
                  }
                >
                  {rightOption.icon ? (
                    <EMCIcon
                      as={rightOption.icon?.as}
                      name={rightOption.icon?.name}
                      size={rightOption.icon?.size || 7}
                      color={Colors.light[50]}
                      opacity={rightOption.disabled ? 0.5 : 1}
                    />
                  ) : (
                    <EMCText fColor={Colors.light[50]}>
                      {rightOption.title}
                    </EMCText>
                  )}
                </TouchableOpacity>
              ))}
          </EMCBox>
        </EMCHStack>
      </EMCVStack>
    </View>
  )
}

export default EMCHeaderSimple
