import { render, screen } from '@testing-library/react'
import ProjectCard from './ProjectCard.component'

const mockProject = {
  imageUrl: 'https://via.placeholder.com/350x180',
  title: 'Projeto Teste',
  description: 'Descrição do projeto.',
  projectUrl: 'https://example.com',
}

test('deve renderizar o título do projeto', () => {
  render(<ProjectCard {...mockProject} />)

  expect(screen.getByText(mockProject.title)).toBeInTheDocument()
})

test('deve renderizar a descrição do projeto', () => {
  render(<ProjectCard {...mockProject} />)

  expect(screen.getByText(mockProject.description)).toBeInTheDocument()
})

test('deve renderizar a imagem do projeto', () => {
  render(<ProjectCard {...mockProject} />)

  const image = screen.getByAltText(mockProject.title)
  expect(image).toBeInTheDocument()
  expect(image).toHaveAttribute('src', mockProject.imageUrl)
})

test('deve renderizar um botão com link correto', () => {
  render(<ProjectCard {...mockProject} />)

  const button = screen.getByRole('link', { name: 'Ver Projeto' })
  expect(button).toBeInTheDocument()
  expect(button).toHaveAttribute('href', mockProject.projectUrl)
})
