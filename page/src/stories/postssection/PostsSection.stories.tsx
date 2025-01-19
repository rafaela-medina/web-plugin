import type { Meta, StoryObj } from '@storybook/react'
import { PostsSection } from '~/components/organisms/PostsSection'

const meta: Meta<typeof PostsSection> = {
  title: 'Organisms/PostsSection',
  component: PostsSection,
  args: {
    title: 'Últimos Posts',
    posts: [
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
    ],
  },
}

export default meta
type Story = StoryObj<typeof PostsSection>

export const Default: Story = {}
