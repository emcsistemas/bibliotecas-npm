import { Pressable, StyleSheet } from 'react-native'
import { styles, makeBaseEMCButtonStyle } from '../styles'
import { CustomButtonProps } from '../ui-components.types'
import { Box } from '../Box'
import { Text } from '@components/Text'
import { Spinner } from '../Spinner'

export function EMCButton(props: CustomButtonProps) {
  const buttonStyles = StyleSheet.compose(
    styles.button,
    makeBaseEMCButtonStyle(props),
  )

  const loadingComponent = () => {
    return (
      <Box flex={1} alignItems="center" justifyContent="center" opacity={0.7}>
        {props.isLoadingText ? (
          <Text isBold>{props.isLoadingText}</Text>
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
