import { Pressable, StyleSheet } from 'react-native'
import { styles, makeBaseEMCButtonStyle } from '../../styles/styles'
import { CustomButtonProps } from '../../styles/ui-components.types'
import Box from '../Box'
import EMCText from '../EMCText'
import Spinner from '../Spinner'
import { DEFAULT_OPACITY_CLICK } from '../../styles/ui-components.consts'
import { Colors } from 'react-native/Libraries/NewAppScreen'


const EMCButton = (props: CustomButtonProps) => {
  const buttonStyles = StyleSheet.compose(
    styles.button,
    makeBaseEMCButtonStyle(props),
  )

  const loadingComponent = () => {
    return (
      <Box
        flex={1}
        alignItems='center'
        justifyContent='center'
        opacity={DEFAULT_OPACITY_CLICK}
      >
        {props.isLoadingText ? (
          <EMCText isBold>{props.isLoadingText}</EMCText>
        ) : (
          <Spinner color={props.spinnerColor} />
        )}
      </Box>
    )
  }

  const textComponent = () => {
    return <EMCText 
      fSize={props.textStyle?.fSize ?? 'md'}
      fColor={props.textStyle?.fColor ?? Colors.white}
      isBold={props.textStyle?.isBold}
      wordWrap={props.textStyle?.wordWrap}
      noAccessibility={props.textStyle?.noAccessibility}
      textAlign={props.textStyle?.textAlign}
      textTransform={props.textStyle?.textTransform}
      w={props.textStyle?.w}
      m={props.textStyle?.m}
      mt={props.textStyle?.mt}
      mb={props.textStyle?.mb}
      ml={props.textStyle?.ml}
      mr={props.textStyle?.mr}
      opacity={props.textStyle?.opacity}>{props.text}</EMCText>  
  }

  return (
    <Pressable
      style={({ pressed }) => [
        buttonStyles,
        { opacity: !props.noPressedEffect && pressed ? 0.8 : 1 },
      ]}
      {...props}
    >
      {props.isLoading ? loadingComponent() : props.text ? textComponent() : props.children}
    </Pressable>
  )
}

export default EMCButton