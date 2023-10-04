import { Colors } from "../../theme"
import EMCVStack from "../EMCVStack"

interface BackgroundProps {
  children: React.ReactNode
}

const EMCBackground = ({ children }: BackgroundProps) => {
  return (
    <EMCVStack
      flex={1}
      bg={Colors.light[50]}
    >
      {children}
    </EMCVStack>
  )
}

export default EMCBackground