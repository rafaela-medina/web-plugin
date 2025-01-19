import { render, screen } from '@testing-library/react'
import { Footer } from './Footer.component'

test('deve renderizar a mensagem do rodapé', () => {
  render(<Footer />)

  expect(screen.getByText('Desenvolvido como parte do desafio técnico para')).toBeInTheDocument()
})

test('deve renderizar o link corretamente', () => {
  render(<Footer />)

  const link = screen.getByRole('link', { name: 'Hand Talk' })
  expect(link).toBeInTheDocument()
  expect(link).toHaveAttribute('href', 'https://handtalk.me')
})
