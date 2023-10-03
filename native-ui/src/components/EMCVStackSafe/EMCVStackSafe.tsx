import { CustomViewProps } from '../../styles/Types/ui-components.types'
import SafeArea from '../EMCSafeArea'
import EMCVStack from '../EMCVStack/EMCVStack'

const EMCVStackSafe = (props: CustomViewProps) => {
  return (
    <SafeArea>
      <EMCVStack {...props} />
    </SafeArea>
  )
}

export default EMCVStackSafe
