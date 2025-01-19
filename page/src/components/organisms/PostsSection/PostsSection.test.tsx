import { render, screen } from '@testing-library/react'
import { PostsSection } from './PostsSection.component'

const mockPosts = [
  {
    title: 'Post 1',
    description: 'Descrição do post 1.',
    postUrl: 'https://example.com/1',
  },
  {
    title: 'Post 2',
    description: 'Descrição do post 2.',
    postUrl: 'https://example.com/2',
  },
]

test('deve renderizar o título da seção', () => {
  render(<PostsSection title="Últimos Posts" posts={mockPosts} />)

  expect(screen.getByText('Últimos Posts')).toBeInTheDocument()
})

test('deve renderizar os cartões de postagens corretamente', () => {
  render(<PostsSection title="Últimos Posts" posts={mockPosts} />)

  expect(screen.getByText('Post 1')).toBeInTheDocument()
  expect(screen.getByText('Post 2')).toBeInTheDocument()
})
