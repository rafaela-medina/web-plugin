import React from 'react'
import { Container, Title, PostsGrid } from './PostsSection.styles'
import { PostCard } from '~/components/molecules/PostCard'

interface Post {
  title: string
  description: string
  postUrl: string
}

interface PostsSectionProps {
  title: string
  posts: Post[]
}

const PostsSection: React.FC<PostsSectionProps> = ({ title, posts }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <PostsGrid>
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </PostsGrid>
    </Container>
  )
}

export default PostsSection
