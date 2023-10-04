import { Pressable, Switch, SwitchProps } from "react-native"
import { Colors } from "../../theme"
import { Ionicons } from "@expo/vector-icons"
import EMCHStack from "../EMCHStack"
import EMCIcon from "../EMCIcon"
import EMCText from "../EMCText"

interface EMCSwitchProps extends SwitchProps {
  title: string
  onInformationPress?(): void
}

const EMCSwitch = ({ title, onInformationPress, ...rest }: EMCSwitchProps) => {
  return (
    <>
      <EMCHStack align='center'>
        <EMCText mr={onInformationPress ? 1 : 2}>{title}</EMCText>
        {onInformationPress && (
          <Pressable onPress={onInformationPress}>
            <EMCIcon
              as={Ionicons}
              name='information-circle-outline'
              color={Colors.blue[400]}
              size={6}
            />
          </Pressable>
        )}
      </EMCHStack>
      <Switch
        trackColor={{ false: Colors.gray[200], true: Colors.success[700] }}
        ios_backgroundColor={Colors.white}
        {...rest}
      />
    </>
  )
}

export default EMCSwitch
