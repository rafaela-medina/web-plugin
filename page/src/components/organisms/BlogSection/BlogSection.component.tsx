import React from 'react'
import { BLOG_POSTS } from '~/data/mockData'
import { Title } from '~/components/atoms/Title/Title.component'
import { Button } from '~/components/atoms/Button/Button.component'
import { PostCard } from '~/components/molecules/PostCard/PostCard.component'
import { SectionContainer } from './BlogSection.styles'

export const BlogSection: React.FC = () => (
  <SectionContainer>
    <Title size="large" as="h2">Últimas postagens</Title>
    {BLOG_POSTS.map((post) => (
      <PostCard key={post.id} title={post.title} description={post.description} />
    ))}
    <Button fullWidth variant="dark" ariaLabel="Ver todas as postagens">Ver todas as postagens</Button>
  </SectionContainer>
)
