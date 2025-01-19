import React from 'react'
import { Text } from './Typography.styles'

interface TypographyProps {
  variant: 'title' | 'subtitle' | 'body'
  children: React.ReactNode
}

const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
  return <Text variant={variant}>{children}</Text>
}

export default Typography
