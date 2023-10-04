import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import { Feather } from "@expo/vector-icons"
import EMCBox from "../EMCBox"
import EMCHStack from "../EMCHStack"
import EMCIcon from "../EMCIcon"
import EMCText from "../EMCText"
import { Colors } from "../../theme"
import Consts from "../../styles/Consts"

interface EMCDropDownProps extends TouchableOpacityProps {
  h?: number
  value?: string
  placeholder: string
  disabled?: boolean
  isTablet?: boolean  
}

const EMCDropDown = ({
  h,
  value,
  placeholder,
  disabled,
  isTablet,
  ...rest
}: EMCDropDownProps) => {
  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : Consts.DEFAULT_OPACITY_CLICK}
      {...rest}
    >
      <EMCHStack
        w='full'
        h={h || 12}
        align='center'
        justify='space-between'
        px={2}
        bg={disabled ? 'light.200' : 'white'}
        bColor={Colors.gray[700]}
        bWidth={1}
        rounded='sm'
      >
        <EMCBox>
          <EMCText
            fSize={isTablet ? 'lg' : 'md'}
            fColor={value ? undefined : Colors.gray[500]}
          >
            {value || placeholder}
          </EMCText>
        </EMCBox>
        <EMCBox>
          <EMCIcon
            as={Feather}
            name='chevron-down'
            color={disabled ? Colors.light[400] : Colors.gray[800]}
            size={6}
          />
        </EMCBox>
      </EMCHStack>
    </TouchableOpacity>
  )
}

export default EMCDropDown
