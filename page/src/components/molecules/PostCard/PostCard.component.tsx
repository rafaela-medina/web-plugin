import React from 'react'
import { PostCardContainer } from './PostCard.styles'

interface PostCardProps {
  date: string;
  title: string;
  description: string;
}

export const PostCard: React.FC<PostCardProps> = ({ date, title, description }) => (
  <PostCardContainer>
    <p className="post-date">{date}</p>
    <h3>{title}</h3>
    <p>{description}</p>
  </PostCardContainer>
)
