import React from 'react'
import { Container } from '~/components/atoms/Container/Container.component'
import { Footer } from '~/components/organisms/Footer/Footer.component'
import { Header } from '~/components/organisms/Header/Header.component'

interface MainTemplateProps {
  children: React.ReactNode
}

export const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}
