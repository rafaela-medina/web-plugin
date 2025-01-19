import React from 'react'
import { StyledButton } from './Button.styles'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'dark'
  fullWidth?: boolean
  ariaLabel: string
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', fullWidth = false, ariaLabel }) => {
  return (
    <StyledButton onClick={onClick} variant={variant} fullWidth={fullWidth} aria-label={ariaLabel}>
      {children}
    </StyledButton>
  )
}
