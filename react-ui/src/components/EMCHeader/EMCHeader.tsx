import React from 'react'
import { Colors } from "../../theme"

interface EMCHeaderProps {
  title: string
  subtitle?: string
  fontSize: 'lg' | 'md' | 'sm' | 'xl' | 'xs'
  fontSizeSt?: 'lg' | 'md' | 'sm' | 'xl' | 'xs'
  onPress?(): void
}

const EMCHeader = (props: EMCHeaderProps) => {
  return (
    <h1 color={Colors.blue[400]}>props.title</h1>
  )
}

export default EMCHeader
