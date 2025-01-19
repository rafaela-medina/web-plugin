import React from 'react'
import { StyledTitle } from './Title.styles'

interface TitleProps {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  align?: 'left' | 'center' | 'right'
  as?: 'h1' | 'h2' | 'h3'
}

export const Title: React.FC<TitleProps> = ({ children, size = 'medium', align = 'center', as = 'h2' }) => {
  return <StyledTitle size={size} align={align} as={as}>{children}</StyledTitle>
}
