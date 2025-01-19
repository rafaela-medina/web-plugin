import type { Meta, StoryObj } from '@storybook/react'
import { MainTemplate } from '~/components/templates/MainTemplate'

const meta: Meta<typeof MainTemplate> = {
  title: 'Templates/MainTemplate',
  component: MainTemplate,
  args: {
    children: <p>Conteúdo do Template</p>,
  },
}

export default meta
type Story = StoryObj<typeof MainTemplate>

export const Default: Story = {}
