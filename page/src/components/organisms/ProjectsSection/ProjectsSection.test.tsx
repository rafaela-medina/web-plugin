import { render, screen } from '@testing-library/react'
import { ProjectsSection } from './ProjectsSection.component'

const mockProjects = [
  {
    imageUrl: 'https://via.placeholder.com/350x180',
    title: 'Projeto 1',
    description: 'Descrição do projeto 1.',
    projectUrl: 'https://example.com/1',
  },
  {
    imageUrl: 'https://via.placeholder.com/350x180',
    title: 'Projeto 2',
    description: 'Descrição do projeto 2.',
    projectUrl: 'https://example.com/2',
  },
]

test('deve renderizar o título da seção', () => {
  render(<ProjectsSection title="Meus Projetos" projects={mockProjects} />)

  expect(screen.getByText('Meus Projetos')).toBeInTheDocument()
})

test('deve renderizar os cartões de projetos corretamente', () => {
  render(<ProjectsSection title="Meus Projetos" projects={mockProjects} />)

  expect(screen.getByText('Projeto 1')).toBeInTheDocument()
  expect(screen.getByText('Projeto 2')).toBeInTheDocument()
})
