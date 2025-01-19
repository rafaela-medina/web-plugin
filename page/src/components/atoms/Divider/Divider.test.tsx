import { render, screen } from '@testing-library/react'
import Divider from './Divider.component'

test('deve renderizar um divider com a espessura padrão', () => {
  render(<Divider thickness={2} width="100%" color="black" />)

  const divider = screen.getByRole('separator')

  expect(divider).toBeInTheDocument()
  expect(divider).toHaveStyle('height: 2px')
})

test('deve renderizar um divider com espessura personalizada', () => {
  render(<Divider thickness={5} width="100%" color="black" />)

  const divider = screen.getByRole('separator')

  expect(divider).toHaveStyle('height: 5px')
})

test('deve renderizar um divider com largura personalizada', () => {
  render(<Divider thickness={2} width="50%" color="black" />)

  const divider = screen.getByRole('separator')

  expect(divider).toHaveStyle('width: 50%')
})

test('deve renderizar um divider com cor personalizada', () => {
  render(<Divider thickness={2} width="100%" color="red" />)

  const divider = screen.getByRole('separator')

  expect(divider).toHaveStyle('background-color: red')
})
