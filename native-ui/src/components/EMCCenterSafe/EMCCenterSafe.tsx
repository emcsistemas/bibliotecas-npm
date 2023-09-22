import { CustomViewProps } from '../../styles/ui-components.types'
import EMCCenter from '../EMCCenter/EMCCenter'
import SafeArea from '../EMCSafeArea'

const EMCCenterSafe = (props: CustomViewProps) => {
  return (
    <SafeArea>
      <EMCCenter {...props} />
    </SafeArea>
  )
}

export default EMCCenterSafe
