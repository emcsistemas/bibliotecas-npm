import { CustomViewProps } from '../../styles/ui-components.types'
import HStack from '../HStack/HStack'
import SafeArea from '../SafeArea'

const HStackSafe = (props: CustomViewProps) => {
  return (
    <SafeArea>
      <HStack {...props} />
    </SafeArea>
  )
}

export default HStackSafe
