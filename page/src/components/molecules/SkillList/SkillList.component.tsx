import React from 'react'
import { Container, Category, CategoryTitle, Skills, SkillItem } from './SkillList.styles'

interface Skill {
  name: string
  icon?: React.ReactNode
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

interface SkillListProps {
  categories: SkillCategory[]
}

const SkillList: React.FC<SkillListProps> = ({ categories }) => {
  return (
    <Container>
      {categories.map((category) => (
        <Category key={category.title}>
          <CategoryTitle>{category.title}</CategoryTitle>
          <Skills>
            {category.skills.map((skill) => (
              <SkillItem key={skill.name}>
                {skill.icon}
                {skill.name}
              </SkillItem>
            ))}
          </Skills>
        </Category>
      ))}
    </Container>
  )
}

export default SkillList
