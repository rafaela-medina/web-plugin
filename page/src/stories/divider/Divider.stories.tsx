import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from '~/components/atoms/Divider'

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  args: {
    thickness: 2,
    width: '100%',
    color: '#ccc',
  },
}

export default meta
type Story = StoryObj<typeof Divider>

export const Thin: Story = {
  args: {
    thickness: 1,
  },
}

export const Thick: Story = {
  args: {
    thickness: 5,
  },
}

export const HalfWidth: Story = {
  args: {
    width: '50%',
  },
}

export const CustomColor: Story = {
  args: {
    color: 'red',
  },
}
