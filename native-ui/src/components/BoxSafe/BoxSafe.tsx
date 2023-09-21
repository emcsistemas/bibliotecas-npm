import { CustomViewProps } from '../../styles/ui-components.types'
import Box from '../Box/Box'
import SafeArea from '../SafeArea'

const BoxSafe = (props: CustomViewProps) => {
  return (
    <SafeArea>
      <Box {...props} />
    </SafeArea>
  )
}

export default BoxSafe
