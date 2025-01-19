import React from 'react'
import { SKILLS } from '~/data/mockData'
import { SkillCategory, SkillItem } from './SkillList.styles'

export const SkillList: React.FC = () => (
  <>
    {SKILLS.map((skill) => (
      <div key={skill.category}>
        <SkillCategory>{skill.category}</SkillCategory>
        {skill.items.map((item) => <SkillItem key={item}>{item}</SkillItem>)}
      </div>
    ))}
  </>
)
