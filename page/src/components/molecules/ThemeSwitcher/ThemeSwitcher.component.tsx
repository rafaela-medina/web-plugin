import React from 'react'
import { useTheme } from '~/contexts/ThemeContext'
import { Container, ToggleButton } from './ThemeSwitcher.styles'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Container>
      <ToggleButton onClick={toggleTheme}>
        {theme.mode === 'light' ? <FaSun /> : <FaMoon />}
      </ToggleButton>
    </Container>
  )
}

export default ThemeSwitcher
