import { CustomViewProps } from '../../styles/ui-components.types'
import Center from '../Center/Center'
import SafeArea from '../SafeArea'

const CenterSafe = (props: CustomViewProps) => {
  return (
    <SafeArea>
      <Center {...props} />
    </SafeArea>
  )
}

export default CenterSafe
