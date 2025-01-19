import type { Meta, StoryObj } from '@storybook/react'
import { AboutMe } from '~/components/organisms/AboutMe'

const meta: Meta<typeof AboutMe> = {
  title: 'Organisms/AboutMe',
  component: AboutMe,
  args: {
    description: 'Sou um desenvolvedor apaixonado por tecnologia.',
    email: 'email@example.com',
    linkedin: 'https://linkedin.com/in/example',
    github: 'https://github.com/example',
  },
}

export default meta
type Story = StoryObj<typeof AboutMe>

export const Default: Story = {}
