import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button.component'

test('deve renderizar o botão com o texto correto', () => {
  render(<Button variant="primary">Clique Aqui</Button>)

  const button = screen.getByRole('button', { name: 'Clique Aqui' })

  expect(button).toBeInTheDocument()
})

test('deve chamar a função onClick ao ser clicado', () => {
  const onClick = jest.fn()
  render(<Button variant="primary" onClick={onClick}>Clique Aqui</Button>)

  const button = screen.getByRole('button', { name: 'Clique Aqui' })
  fireEvent.click(button)

  expect(onClick).toHaveBeenCalledTimes(1)
})

test('deve estar desativado quando a prop `disabled` for true', () => {
  render(<Button variant="primary" disabled>Não Clique</Button>)

  const button = screen.getByRole('button', { name: 'Não Clique' })
  expect(button).toBeDisabled()
})
