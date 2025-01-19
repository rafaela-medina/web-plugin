import React from 'react'
import { ThemeSwitcher } from '~/components/molecules/ThemeSwitcher/ThemeSwitcher.component'
import { HeaderContainer } from './Header.styles'

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <ThemeSwitcher />
    </HeaderContainer>
  )
}
