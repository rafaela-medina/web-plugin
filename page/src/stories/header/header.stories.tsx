import type { Meta, StoryObj } from '@storybook/react'
import { Header } from '~/components/organisms/Header'
import { ThemeProvider } from '~/contexts/ThemeContext'

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  args: {
    userName: 'John Doe',
    avatarUrl: 'https://via.placeholder.com/150',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Projetos', href: '/projects' },
    ],
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {}
