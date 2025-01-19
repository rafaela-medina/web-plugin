import React from 'react'
import { MainTemplate } from '~/components/templates/MainTemplate'
import { AboutMe } from '~/components/organisms/AboutMe'
import { ProjectsSection } from '~/components/organisms/ProjectsSection'
import { PostsSection } from '~/components/organisms/PostsSection'
import { Section } from './HomePage.styles'

const mockProjects = [
  {
    imageUrl: 'https://via.placeholder.com/350x180',
    title: 'Projeto 1',
    description: 'Descrição do projeto 1.',
    projectUrl: 'https://example.com/1',
  },
  {
    imageUrl: 'https://via.placeholder.com/350x180',
    title: 'Projeto 2',
    description: 'Descrição do projeto 2.',
    projectUrl: 'https://example.com/2',
  },
]

const mockPosts = [
  {
    title: 'Post 1',
    description: 'Descrição do post 1.',
    postUrl: 'https://example.com/1',
  },
  {
    title: 'Post 2',
    description: 'Descrição do post 2.',
    postUrl: 'https://example.com/2',
  },
]

const HomePage: React.FC = () => {
  return (
    <MainTemplate>
      <Section id="about">
        <AboutMe
          description="Sou um desenvolvedor apaixonado por tecnologia e inovação."
          email="email@example.com"
          linkedin="https://linkedin.com/in/example"
          github="https://github.com/example"
        />
      </Section>

      <Section id="projects">
        <ProjectsSection title="Meus Projetos" projects={mockProjects} />
      </Section>

      <Section id="blog">
        <PostsSection title="Últimos Posts" posts={mockPosts} />
      </Section>
    </MainTemplate>
  )
}

export default HomePage
