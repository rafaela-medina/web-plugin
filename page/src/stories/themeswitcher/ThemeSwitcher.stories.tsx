import type { Meta, StoryObj } from '@storybook/react'
import { ThemeSwitcher } from '~/components/molecules/ThemeSwitcher'
import { ThemeProvider } from '~/contexts/ThemeContext'

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Molecules/ThemeSwitcher',
  component: ThemeSwitcher,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ThemeSwitcher>

export const Default: Story = {}
