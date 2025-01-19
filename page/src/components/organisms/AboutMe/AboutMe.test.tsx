import { render, screen } from '@testing-library/react'
import { AboutMe } from './AboutMe.component'

const mockProps = {
  description: 'Sou um desenvolvedor apaixonado por tecnologia.',
  email: 'email@example.com',
  linkedin: 'https://linkedin.com/in/example',
  github: 'https://github.com/example',
}

test('deve renderizar a descrição corretamente', () => {
  render(<AboutMe {...mockProps} />)

  expect(screen.getByText(mockProps.description)).toBeInTheDocument()
})

test('deve renderizar os botões de contato corretamente', () => {
  render(<AboutMe {...mockProps} />)

  expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute('href', `mailto:${mockProps.email}`)
  expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', mockProps.linkedin)
  expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', mockProps.github)
})
