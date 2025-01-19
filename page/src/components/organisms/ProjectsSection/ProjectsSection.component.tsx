import React from 'react'
import { Container, Title, ProjectsGrid } from './ProjectsSection.styles'
import { ProjectCard } from '~/components/molecules/ProjectCard'

interface Project {
  imageUrl: string
  title: string
  description: string
  projectUrl: string
}

interface ProjectsSectionProps {
  title: string
  projects: Project[]
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ title, projects }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </ProjectsGrid>
    </Container>
  )
}

export default ProjectsSection
