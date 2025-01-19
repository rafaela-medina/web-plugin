import React from 'react'
import { Title } from '~/components/atoms/Title/Title.component'
import { CardContainer, PostDescription } from './PostCard.styles'

interface PostCardProps {
  title: string
  description: string
}

export const PostCard: React.FC<PostCardProps> = ({ title, description }) => {
  return (
    <CardContainer>
      <Title size="medium" as="h3">{title}</Title>
      <PostDescription>{description}</PostDescription>
    </CardContainer>
  )
}
