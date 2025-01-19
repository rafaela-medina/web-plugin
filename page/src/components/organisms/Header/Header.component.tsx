import React from 'react'
import { HeaderContainer, Profile, UserName } from './Header.styles' // Importação corrigida
import { Avatar } from '~/components/atoms/Avatar'
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
