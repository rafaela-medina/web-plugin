import type { Meta, StoryObj } from '@storybook/react'
import { ProjectsSection } from '~/components/organisms/ProjectsSection'

const meta: Meta<typeof ProjectsSection> = {
  title: 'Organisms/ProjectsSection',
  component: ProjectsSection,
  args: {
    title: 'Meus Projetos',
    projects: [
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
    ],
  },
}

export default meta
type Story = StoryObj<typeof ProjectsSection>

export const Default: Story = {}
