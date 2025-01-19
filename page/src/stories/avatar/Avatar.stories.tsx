import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '~/components/atoms/Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'Imagem de Avatar',
    size: 'medium',
    round: true,
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Small: Story = {
  args: {
    size: 'small',
  },
}

export const Medium: Story = {
  args: {
    size: 'medium',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
  },
}

export const Square: Story = {
  args: {
    round: false,
  },
}
