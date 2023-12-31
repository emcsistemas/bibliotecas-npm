import { CustomViewProps } from '../../styles/Types/ui-components.types'
import EMCBox from '../EMCBox/EMCBox'
import SafeArea from '../EMCSafeArea'

const EMCBoxSafe = (props: CustomViewProps) => {
  return (
    <SafeArea>
      <EMCBox {...props} />
    </SafeArea>
  )
}

export default EMCBoxSafe
