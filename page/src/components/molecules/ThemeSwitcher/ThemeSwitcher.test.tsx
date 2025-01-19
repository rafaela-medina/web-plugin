import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeSwitcher } from './ThemeSwitcher.component'
import { ThemeProvider } from '~/contexts/ThemeContext'

test('deve exibir "Modo Claro" como tema inicial', () => {
  render(
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  )

  expect(screen.getByText('Modo Claro')).toBeInTheDocument()
})

test('deve alternar para "Modo Escuro" ao clicar no botão de troca de tema', () => {
  render(
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  )

  const button = screen.getByRole('button')

  fireEvent.click(button)

  expect(screen.getByText('Modo Escuro')).toBeInTheDocument()
})
