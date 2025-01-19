import React from 'react'
import { Card, Title, Description, Button } from './PostCard.styles'

interface PostCardProps {
  title: string
  description: string
  postUrl: string
}

const PostCard: React.FC<PostCardProps> = ({ title, description, postUrl }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button href={postUrl} target="_blank" rel="noopener noreferrer">
        Ler Mais
      </Button>
    </Card>
  )
}

export default PostCard
