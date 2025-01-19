import type { Meta, StoryObj } from '@storybook/react'
import { ContactButton } from '~/components/molecules/ContactButton'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const meta: Meta<typeof ContactButton> = {
  title: 'Molecules/ContactButton',
  component: ContactButton,
  args: {
    type: 'email',
    url: 'mailto:test@example.com',
    label: 'Enviar Email',
    icon: <FaEnvelope />,
  },
}

export default meta
type Story = StoryObj<typeof ContactButton>

export const Email: Story = {
  args: {
    type: 'email',
    url: 'mailto:test@example.com',
    label: 'Enviar Email',
    icon: <FaEnvelope />,
  },
}

export const LinkedIn: Story = {
  args: {
    type: 'linkedin',
    url: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: <FaLinkedin />,
  },
}

export const GitHub: Story = {
  args: {
    type: 'github',
    url: 'https://github.com',
    label: 'GitHub',
    icon: <FaGithub />,
  },
}
