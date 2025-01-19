import React from 'react'
import { useTheme } from '~/contexts/ThemeContext'
import { ToggleButton } from './ThemeSwitcher.styles'

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <ToggleButton onClick={toggleTheme}>
      {theme.mode === 'light' ? '☀️' : '🌙'}
    </ToggleButton>
  )
}

export default ThemeSwitcher
