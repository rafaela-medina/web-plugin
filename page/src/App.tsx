import React from 'react'
import { ThemeProvider } from '~/contexts/ThemeContext'
import { GlobalStyles } from '~/styles/GlobalStyles'
import { HomePage } from './pages'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <HomePage />
    </ThemeProvider>
  )
}

export default App
