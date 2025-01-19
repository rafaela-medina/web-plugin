import React from 'react'
import { Title } from '~/components/atoms/Title/Title.component'
import { Button } from '~/components/atoms/Button/Button.component'
import { CardContainer, ProjectImage, ProjectDescription } from './ProjectCard.styles'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  return (
    <CardContainer>
      <ProjectImage src={imageUrl} alt={`Imagem do projeto ${title}`} loading="lazy" />
      <Title size="medium" as="h3">{title}</Title>
      <ProjectDescription>{description}</ProjectDescription>
      <Button variant="dark" ariaLabel={`Ver mais sobre ${title}`}>Ver mais</Button>
    </CardContainer>
  )
}
