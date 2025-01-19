import { render, screen } from '@testing-library/react'
import Avatar from './Avatar.component'

test('deve renderizar a imagem do avatar com o alt correto', () => {
  render(<Avatar src="https://via.placeholder.com/150" alt="Avatar de teste" />)

  const avatar = screen.getByAltText('Avatar de teste')

  expect(avatar).toBeInTheDocument()
})

test('deve aplicar tamanho pequeno corretamente', () => {
  render(<Avatar src="https://via.placeholder.com/150" alt="Avatar pequeno" size="small" />)

  const avatar = screen.getByAltText('Avatar pequeno')

  expect(avatar).toHaveStyle('width: 32px')
})

test('deve aplicar tamanho grande corretamente', () => {
  render(<Avatar src="https://via.placeholder.com/150" alt="Avatar grande" size="large" />)

  const avatar = screen.getByAltText('Avatar grande')

  expect(avatar).toHaveStyle('width: 96px')
})

test('deve renderizar avatar arredondado por padrão', () => {
  render(<Avatar src="https://via.placeholder.com/150" alt="Avatar arredondado" />)

  const avatar = screen.getByAltText('Avatar arredondado')

  expect(avatar).toHaveStyle('border-radius: 50%')
})

test('deve renderizar avatar com bordas quadradas quando `round` for `false`', () => {
  render(<Avatar src="https://via.placeholder.com/150" alt="Avatar quadrado" round={false} />)

  const avatar = screen.getByAltText('Avatar quadrado')

  expect(avatar).toHaveStyle('border-radius: 8px')
})
