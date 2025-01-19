import React, { createContext, useContext, useState, useEffect } from 'react'
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components'

const lightTheme: DefaultTheme = {
  mode: 'light',
  background: '#ffffff',
  text: '#000000',
  headerBg: '#f1f1f1',
  cardBg: '#ffffff',
  buttonBg: '#007bff',
}

const darkTheme: DefaultTheme = {
  mode: 'dark',
  background: '#222222',
  text: '#ffffff',
  headerBg: '#333333',
  cardBg: '#444444',
  buttonBg: '#0056b3',
}

interface ThemeContextProps {
  theme: DefaultTheme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined) // ✅ Agora está exportando corretamente

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(() => {
    const storedTheme = localStorage.getItem('theme')
    return storedTheme === 'dark' ? darkTheme : lightTheme
  })

  useEffect(() => {
    localStorage.setItem('theme', theme.mode)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme.mode === 'light' ? darkTheme : lightTheme))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider')
  }
  return context
}
