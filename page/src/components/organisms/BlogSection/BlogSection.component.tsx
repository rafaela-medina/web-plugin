import React from 'react'
import { SectionContainer } from './BlogSection.styles'
import { BLOG_POSTS } from '~/data/mockData'
import { Title } from '~/components/atoms/Title/Title.component'
import { PostCard } from '~/components/molecules/PostCard/PostCard.component'
import { Button } from '~/components/atoms/Button/Button.component'

export const BlogSection: React.FC = () => (
  <SectionContainer>
    <Title size="large" as="h2">Últimas postagens</Title>
    {BLOG_POSTS.map((post) => (
      <PostCard key={post.id} date={post.date} title={post.title} description={post.description} />
    ))}
    <Button variant="dark" ariaLabel="Ver todas as postagens">Ver todas as postagens</Button>
  </SectionContainer>
)
