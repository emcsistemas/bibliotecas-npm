import { forwardRef } from "react"
import { TextInput } from "react-native"
import { Feather } from "@expo/vector-icons"
import { CustomInputSelectorsProps } from "../../styles"
import { makeBaseInputSelectorsStyle } from "../../styles/styles.factory"
import EMCBox from "../EMCBox"
import EMCHStack from "../EMCHStack"
import EMCIcon from "../EMCIcon"
import EMCPressable from "../EMCPressable"
import { Colors } from "../../theme"

const EMCInputSelectors = (props: CustomInputSelectorsProps, ref: any) => {
  const baseStyle = makeBaseInputSelectorsStyle(props)

  return (
    <EMCBox
      w={props.w ? undefined : '100%'}
      ml={props.ml || 0}
      mr={props.mr || 0}
      mt={props.mt || 0}
      mb={props.mb || 0}
    >
      <EMCHStack align="center">
        <EMCPressable onPress={props.readOnly ? undefined : props.onMinusPress}>
          <EMCBox
            w={9}
            h={props.h || 9}
            align="center"
            justify="center"
            bTopLeftRadius="sm"
            bBottomLeftRadius="sm"
            bg={Colors.blue[400]}
            opacity={props.readOnly ? 0.5 : 1}
          >
            <EMCIcon as={Feather} name="minus" color={Colors.white} size={6} />
          </EMCBox>
        </EMCPressable>
        <TextInput
          ref={ref || undefined}
          {...props}
          style={baseStyle}
          numberOfLines={1}
          maxLength={props.maxLength || 4}
          autoCorrect={false}
          clearButtonMode={'never'}
          cursorColor={Colors.cursor}
          selectionColor={undefined}
          editable={false}
          autoCapitalize={'none'}
          keyboardType={'number-pad'}
        />
        <EMCPressable onPress={props.readOnly ? undefined : props.onPlusPress}>
          <EMCBox
            w={9}
            h={props.h || 9}
            align="center"
            justify="center"
            bTopRightRadius="sm"
            bBottomRightRadius="sm"
            bg={Colors.blue[400]}
            opacity={props.readOnly ? 0.5 : 1}
          >
            <EMCIcon as={Feather} name="plus" color={Colors.white} size={6} />
          </EMCBox>
        </EMCPressable>
      </EMCHStack>
    </EMCBox>
  )
}

export default forwardRef<TextInput, CustomInputSelectorsProps>(
  EMCInputSelectors,
)
