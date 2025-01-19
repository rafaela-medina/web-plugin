import React from 'react'
import { PROJECTS } from '~/data/mockData'
import { Button } from '~/components/atoms/Button/Button.component'
import { SectionContainer } from './ProjectsSection.styles'
import { Title } from '~/components/atoms/Title/Title.component'
import { ProjectCard } from '~/components/molecules/ProjectCard/ProjectCard.component'

export const ProjectsSection: React.FC = () => (
  <SectionContainer>
    <Title size="large" as="h2">Projetos</Title>
    {PROJECTS.map((project) => (
      <ProjectCard key={project.id} title={project.title} description={project.description} imageUrl={project.imageUrl} />
    ))}
    <Button variant="dark" ariaLabel="Ver todos os projetos">Ver todos os projetos</Button>
  </SectionContainer>
)
