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
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  )
}

export default MainTemplate
