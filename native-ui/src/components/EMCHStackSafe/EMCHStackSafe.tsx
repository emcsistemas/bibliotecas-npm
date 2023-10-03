import { CustomViewProps } from '../../styles/Types/ui-components.types'
import EMCHStack from '../EMCHStack/EMCHStack'
import SafeArea from '../EMCSafeArea'

const EMCHStackSafe = (props: CustomViewProps) => {
  return (
    <SafeArea>
      <EMCHStack {...props} />
    </SafeArea>
  )
}

export default EMCHStackSafe
