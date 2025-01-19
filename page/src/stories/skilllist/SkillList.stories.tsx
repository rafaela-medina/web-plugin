import type { Meta, StoryObj } from '@storybook/react'
import { SkillList } from '~/components/molecules/SkillList'
import { FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa'

const meta: Meta<typeof SkillList> = {
  title: 'Molecules/SkillList',
  component: SkillList,
  args: {
    categories: [
      {
        title: 'Frontend',
        skills: [
          { name: 'React', icon: <FaReact /> },
          { name: 'CSS', icon: <FaCss3Alt /> },
        ],
      },
      {
        title: 'Backend',
        skills: [
          { name: 'Node.js', icon: <FaNodeJs /> },
          { name: 'Express' },
        ],
      },
    ],
  },
}

export default meta
type Story = StoryObj<typeof SkillList>

export const Default: Story = {}
