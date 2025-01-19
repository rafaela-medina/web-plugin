import React from 'react'
import { StyledButton } from './ContactButton.styles'

interface ContactButtonProps {
  type: 'email' | 'linkedin' | 'github'
  url: string
  label: string
  icon?: React.ReactNode
}

const ContactButton: React.FC<ContactButtonProps> = ({ type, url, label, icon }) => {
  return (
    <StyledButton href={url} target="_blank" rel="noopener noreferrer" variant={type}>
      {icon}
      {label}
    </StyledButton>
  )
}

export default ContactButton
