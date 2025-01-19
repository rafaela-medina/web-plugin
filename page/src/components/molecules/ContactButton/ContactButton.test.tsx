import { render, screen } from '@testing-library/react'
import { ContactButton } from './ContactButton.component'

test('deve renderizar o botão de contato com o texto correto', () => {
  render(<ContactButton type="email" url="mailto:test@example.com" label="Enviar Email" />)

  const button = screen.getByRole('link', { name: 'Enviar Email' })

  expect(button).toBeInTheDocument()
  expect(button).toHaveAttribute('href', 'mailto:test@example.com')
})

test('deve aplicar o estilo correto para LinkedIn', () => {
  render(<ContactButton type="linkedin" url="https://linkedin.com" label="LinkedIn" />)

  const button = screen.getByRole('link', { name: 'LinkedIn' })

  expect(button).toHaveStyle('background-color: #0077b5')
})

test('deve aplicar o estilo correto para GitHub', () => {
  render(<ContactButton type="github" url="https://github.com" label="GitHub" />)

  const button = screen.getByRole('link', { name: 'GitHub' })

  expect(button).toHaveStyle('background-color: #24292e')
})
