import { render, screen } from '@testing-library/react'
import SkillList from './SkillList.component'
import { FaReact, FaNodeJs } from 'react-icons/fa'

const mockCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'TypeScript' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express' },
    ],
  },
]

test('deve renderizar as categorias corretamente', () => {
  render(<SkillList categories={mockCategories} />)

  expect(screen.getByText('Frontend')).toBeInTheDocument()
  expect(screen.getByText('Backend')).toBeInTheDocument()
})

test('deve renderizar as habilidades corretamente', () => {
  render(<SkillList categories={mockCategories} />)

  expect(screen.getByText('React')).toBeInTheDocument()
  expect(screen.getByText('TypeScript')).toBeInTheDocument()
  expect(screen.getByText('Node.js')).toBeInTheDocument()
  expect(screen.getByText('Express')).toBeInTheDocument()
})
