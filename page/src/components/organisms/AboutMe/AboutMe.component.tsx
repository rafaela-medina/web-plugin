import React from 'react'
import { ABOUT_ME } from '~/data/mockData'
import { Title } from '~/components/atoms/Title/Title.component'
import { SkillList } from '~/components/molecules/SkillList/SkillList.component'
import { SectionContainer } from './AboutMe.styles'

export const AboutMeSection: React.FC = () => (
  <SectionContainer>
    <Title size="large" as="h2" align="left">Sobre mim</Title>
    <p>{ABOUT_ME.description}</p>
    <SkillList />
  </SectionContainer>
)
