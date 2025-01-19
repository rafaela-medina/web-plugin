import React from 'react'
import { HeaderContainer } from './Header.styles'
import { ThemeSwitcher } from '~/components/molecules/ThemeSwitcher'

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <ThemeSwitcher />
    </HeaderContainer>
  )
}

export default Header
