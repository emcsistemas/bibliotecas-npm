import { CustomViewProps } from '../../styles/ui-components.types'
import SafeArea from '../SafeArea'
import VStack from '../VStack/VStack'

const VStackSafe = (props: CustomViewProps) => {
  return (
    <SafeArea>
      <VStack {...props} />
    </SafeArea>
  )
}

export default VStackSafe
