import React from 'react'
import { FooterContainer, FooterText, FooterLink } from './Footer.styles'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>
        Desenvolvido como parte do desafio técnico para{' '}
        <FooterLink href="https://handtalk.me" target="_blank" rel="noopener noreferrer">
          Hand Talk
        </FooterLink>
      </FooterText>
    </FooterContainer>
  )
}

export default Footer
