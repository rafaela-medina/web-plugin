import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from '~/components/atoms/Typography'

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  args: {
    variant: 'body',
    children: 'Texto de exemplo',
  },
}

export default meta
type Story = StoryObj<typeof Typography>

export const Title: Story = {
  args: {
    variant: 'title',
    children: 'Título Exemplo',
  },
}

export const Subtitle: Story = {
  args: {
    variant: 'subtitle',
    children: 'Subtítulo Exemplo',
  },
}

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Texto de corpo',
  },
}
