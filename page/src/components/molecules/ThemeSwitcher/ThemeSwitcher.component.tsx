import React from 'react'
import { useTheme } from '~/contexts/ThemeContext'
import { ThemeSwitcherContainer } from './ThemeSwitcher.styles'

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <ThemeSwitcherContainer onClick={toggleTheme} aria-label="Alternar tema">
      {theme.mode === 'light' ? '🌙' : '☀️'}
    </ThemeSwitcherContainer>
  )
}
