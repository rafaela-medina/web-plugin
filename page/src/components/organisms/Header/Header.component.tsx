import React from 'react'
import { useTheme } from '~/contexts/ThemeContext'
import { HeaderContainer, Profile, Name, Nav, NavLink } from './Header.styles'
import { Avatar } from '~/components/atoms/Avatar'
import { ThemeSwitcher } from '~/components/molecules/ThemeSwitcher'

interface HeaderProps {
  userName: string
  avatarUrl: string
  links: { label: string; href: string }[]
}

const Header: React.FC<HeaderProps> = ({ userName, avatarUrl, links }) => {
  const { theme } = useTheme()

  return (
    <HeaderContainer>
      <Profile>
        <Avatar src={avatarUrl} alt={userName} size="medium" />
        <Name>{userName}</Name>
      </Profile>
      <Nav>
        {links.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </Nav>
      <ThemeSwitcher />
    </HeaderContainer>
  )
}

export default Header
