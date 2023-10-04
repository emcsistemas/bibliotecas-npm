import { PressableProps, DimensionValue } from "react-native"
import { Colors } from "../../theme"
import { FontAwesome5 } from "@expo/vector-icons"
import EMCBox from "../EMCBox"
import EMCButton from "../EMCButton"
import EMCHStack from "../EMCHStack"
import EMCIcon from "../EMCIcon"
import EMCText from "../EMCText"

type WhatsAppProps = {
  ativo?: boolean
  phoneNumber: string
}

interface EMCWhatsAppButtonProps extends PressableProps {
  w?: DimensionValue | 'full'
  h?: DimensionValue | 'full'
  title: string
  whatsapp: WhatsAppProps
  loading?: boolean
}

const EMCWhatsAppButton = ({
  w,
  h,
  title,
  whatsapp,
  loading,
  ...rest
}: EMCWhatsAppButtonProps) => {
  return (
    <EMCBox
      w='full'
      h={14}
    >
      <EMCButton
        flex={w || h ? undefined : 1}
        w={w}
        h={h}
        rounded='md'
        loading={loading || false}
        loadingText='Enviando mensagem ...'
        loadingTextColor={Colors.whatsapp}
        loadingSpinnerColor={Colors.whatsapp}
        bg={Colors.light[50]}
        opacity={whatsapp.ativo ? 1 : 0.5}
        bWidth={2}
        bColor='whatsapp'
        {...rest}
      >
        <EMCHStack px={4}>
          <EMCBox>
            <EMCIcon
              as={FontAwesome5}
              name='whatsapp'
              size={7}
              color={Colors.whatsapp}
            />
          </EMCBox>
          <EMCBox
            flex={1}
            align='center'
            justify='center'
          >
            <EMCText
              fSize='md'
              fColor={Colors.whatsapp}
              fWeight='bold'
            >
              {title}
            </EMCText>
            <EMCText
              fSize={13}
              fColor={Colors.whatsapp}
              fWeight='semiBold'
            >
              {whatsapp.phoneNumber}
            </EMCText>
          </EMCBox>
        </EMCHStack>
      </EMCButton>
    </EMCBox>
  )
}

export default EMCWhatsAppButton
