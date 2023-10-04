import { PressableProps } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import { Colors } from "../../theme"
import EMCBox from "../EMCBox"
import EMCButton from "../EMCButton"
import EMCHStack from "../EMCHStack"
import EMCIcon from "../EMCIcon"
import EMCText from "../EMCText"

interface EMCBoletoButtonProps extends PressableProps {
  title: string
  loading?: boolean
}

const EMCBoletoButton = ({ title, loading, ...rest }: EMCBoletoButtonProps) => {
  return (
    <EMCBox
      w='full'
      h={12}
    >
      <EMCButton
        flex={1}
        rounded='md'
        loading={loading || false}
        loadingText='Gerando boleto bancário ...'
        loadingSpinnerColor={Colors.blue[400]}
        bg={Colors.white}
        bWidth={2}
        bColor={Colors.blue[400]}
        {...rest}
      >
        <EMCHStack px={4}>
          <EMCBox>
            <EMCIcon
              as={FontAwesome5}
              name='barcode'
              size={7}
              color={Colors.blue[400]}
            />
          </EMCBox>
          <EMCBox
            flex={1}
            align='center'
            justify='center'
          >
            <EMCText
              fSize='md'
              fColor={Colors.blue[400]}
              fWeight='bold'
            >
              {title}
            </EMCText>
          </EMCBox>
        </EMCHStack>
      </EMCButton>
    </EMCBox>
  )
}

export default EMCBoletoButton
