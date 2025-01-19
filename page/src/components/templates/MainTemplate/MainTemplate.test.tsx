import { render, screen } from '@testing-library/react'
import { MainTemplate } from './MainTemplate.component'

test('deve renderizar o layout corretamente', () => {
  render(
    <MainTemplate>
      <p>Conteúdo de Teste</p>
    </MainTemplate>
  )

  expect(screen.getByText('Conteúdo de Teste')).toBeInTheDocument()
  expect(screen.getByText('Sobre')).toBeInTheDocument()
  expect(screen.getByText('Projetos')).toBeInTheDocument()
  expect(screen.getByText('Blog')).toBeInTheDocument()
  expect(screen.getByText('Desenvolvido como parte do desafio técnico para')).toBeInTheDocument()
})
