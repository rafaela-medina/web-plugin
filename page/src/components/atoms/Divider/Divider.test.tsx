import { render, screen } from '@testing-library/react'
import { Divider } from './Divider.component'

test('deve renderizar um divider com a espessura padrão', () => {
  render(<Divider />)

  const divider = screen.getByRole('separator')

  expect(divider).toBeInTheDocument()
  expect(divider).toHaveStyle('height: 2px')
})

test('deve renderizar um divider com espessura personalizada', () => {
  render(<Divider thickness={5} />)

  const divider = screen.getByRole('separator')

  expect(divider).toHaveStyle('height: 5px')
})

test('deve renderizar um divider com largura personalizada', () => {
  render(<Divider width="50%" />)

  const divider = screen.getByRole('separator')

  expect(divider).toHaveStyle('width: 50%')
})

test('deve renderizar um divider com cor personalizada', () => {
  render(<Divider color="red" />)

  const divider = screen.getByRole('separator')

  expect(divider).toHaveStyle('background-color: red')
})
