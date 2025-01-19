import { render, screen } from '@testing-library/react'
import PostCard from './PostCard.component'

const mockPost = {
  title: 'Post de Teste',
  description: 'Este é um post de teste.',
  postUrl: 'https://example.com',
}

test('deve renderizar o título do post', () => {
  render(<PostCard {...mockPost} />)

  expect(screen.getByText(mockPost.title)).toBeInTheDocument()
})

test('deve renderizar a descrição do post', () => {
  render(<PostCard {...mockPost} />)

  expect(screen.getByText(mockPost.description)).toBeInTheDocument()
})

test('deve renderizar um botão com link correto', () => {
  render(<PostCard {...mockPost} />)

  const button = screen.getByRole('link', { name: 'Ler Mais' })
  expect(button).toBeInTheDocument()
  expect(button).toHaveAttribute('href', mockPost.postUrl)
})
