import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '~/contexts/ThemeContext'
import ThemeToggle from './ThemeToggle.component'

test('deve renderizar o botão de tema e alternar entre Dark/Light Mode', () => {
  render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  )

  const button = screen.getByRole('button')

  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent('Dark Mode')

  fireEvent.click(button)

  expect(button).toHaveTextContent('Light Mode')
})
