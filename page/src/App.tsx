import React from 'react'
import { ThemeProvider } from '~/contexts/ThemeContext'
import { HomePage } from './pages'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  )
}

export default App
