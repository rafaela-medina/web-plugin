import React from 'react'
import { useTheme } from '~/contexts/ThemeContext'
import { StyledButton } from './ThemeSwitcher.styles'

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <StyledButton onClick={toggleTheme} aria-label="Alternar tema">
      {theme.name === 'light' ? '☀️' : '🌙'}
    </StyledButton>
  )
}
