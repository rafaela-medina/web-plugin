import React from 'react'
import { StyledContainer } from './Container.styles'

interface ContainerProps {
  children: React.ReactNode
  maxWidth?: string
}

export const Container: React.FC<ContainerProps> = ({ children, maxWidth = '800px' }) => {
  return <StyledContainer maxWidth={maxWidth}>{children}</StyledContainer>
}
