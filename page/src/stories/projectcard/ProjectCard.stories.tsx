import type { Meta, StoryObj } from '@storybook/react'
import { ProjectCard } from '~/components/molecules/ProjectCard'

const meta: Meta<typeof ProjectCard> = {
  title: 'Molecules/ProjectCard',
  component: ProjectCard,
  args: {
    imageUrl: 'https://via.placeholder.com/350x180',
    title: 'Projeto Exemplo',
    description: 'Este é um projeto de exemplo para exibição no card.',
    projectUrl: 'https://example.com',
  },
}

export default meta
type Story = StoryObj<typeof ProjectCard>

export const Default: Story = {}
