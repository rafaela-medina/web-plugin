import React from 'react'
import { Layout, Content } from './MainTemplate.styles'
import { Header } from '~/components/organisms/Header'
import { Footer } from '~/components/organisms/Footer'

interface MainTemplateProps {
  children: React.ReactNode
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <Layout>
      <Header
        userName="John Doe"
        avatarUrl="https://via.placeholder.com/150"
        links={[
          { label: 'Sobre', href: '#about' },
          { label: 'Projetos', href: '#projects' },
          { label: 'Blog', href: '#blog' },
        ]}
      />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  )
}

export default MainTemplate
