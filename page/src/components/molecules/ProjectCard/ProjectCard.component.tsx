import React from 'react'
import { Card, Image, Content, Title, Description, Button } from './ProjectCard.styles'

interface ProjectCardProps {
  imageUrl: string
  title: string
  description: string
  projectUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, description, projectUrl }) => {
  return (
    <Card>
      <Image src={imageUrl} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button href={projectUrl} target="_blank" rel="noopener noreferrer">
          Ver Projeto
        </Button>
      </Content>
    </Card>
  )
}

export default ProjectCard
