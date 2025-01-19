import React from 'react'
import { StyledButton } from './Button.styles'

interface ButtonProps {
  variant: 'primary' | 'secondary'
  disabled?: boolean
  onClick?: () => void
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ variant, disabled, onClick, children }) => {
  return (
    <StyledButton variant={variant} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
