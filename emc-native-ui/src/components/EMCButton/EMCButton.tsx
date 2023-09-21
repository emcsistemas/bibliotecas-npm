import { Pressable, StyleSheet } from 'react-native'
import { styles, makeBaseEMCButtonStyle } from '../../styles/styles'
import { CustomButtonProps } from '../../styles/ui-components.types'
import Box from '../Box'
import EMCText from '../EMCText'
import Spinner from '../Spinner'


const EMCButton = (props: CustomButtonProps) => {
  const buttonStyles = StyleSheet.compose(
    styles.button,
    makeBaseEMCButtonStyle(props),
  )

  const loadingComponent = () => {
    return (
      <Box flex={1} alignItems="center" justifyContent="center" opacity={0.7}>
        {props.isLoadingText ? (
          <EMCText isBold>{props.isLoadingText}</EMCText>
        ) : (
          <Spinner color={props.spinnerColor} />
        )}
      </Box>
    )
  }

  return (
    <Pressable
      style={({ pressed }) => [
        buttonStyles,
        { opacity: !props.noPressedEffect && pressed ? 0.8 : 1 },
      ]}
      {...props}
    >
      {props.isLoading ? loadingComponent() : props.children}
    </Pressable>
  )
}

export default EMCButton