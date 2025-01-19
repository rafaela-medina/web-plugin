import React from 'react'
import { useTheme } from '~/contexts/ThemeContext'
import { Container, ThemeText } from './ThemeSwitcher.styles'
import { ThemeToggle } from '~/components/atoms/ThemeToggle'

const ThemeSwitcher: React.FC = () => {
  const { theme } = useTheme()

  return (
    <Container>
      <ThemeText>{theme === 'light' ? 'Modo Claro' : 'Modo Escuro'}</ThemeText>
      <ThemeToggle />
    </Container>
  )
}

export default ThemeSwitcher
