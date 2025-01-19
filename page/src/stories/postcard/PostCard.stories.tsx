import type { Meta, StoryObj } from '@storybook/react'
import { PostCard } from '~/components/molecules/PostCard'

const meta: Meta<typeof PostCard> = {
  title: 'Molecules/PostCard',
  component: PostCard,
  args: {
    title: 'Post Exemplo',
    description: 'Este é um post de exemplo para exibição no card.',
    postUrl: 'https://example.com',
  },
}

export default meta
type Story = StoryObj<typeof PostCard>

export const Default: Story = {}
