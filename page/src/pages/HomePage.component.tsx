import React from 'react'
import { MainTemplate } from '~/components/templates/MainTemplate/MainTemplate.component'
import { ProjectsSection } from '~/components/organisms/ProjectsSection/ProjectsSection.component'
import { BlogSection } from '~/components/organisms/BlogSection/BlogSection.component'
import { PROFILE_DATA } from '~/data/mockData'
import { Container } from '~/components/atoms/Container/Container.component'
import { Title } from '~/components/atoms/Title/Title.component'
import { Button } from '~/components/atoms/Button/Button.component'
import { ProfileSection, Avatar } from './HomePage.styles'
import { AboutMeSection } from '~/components/organisms/AboutMe/AboutMe.component'

const HomePage: React.FC = () => {
  return (
    <MainTemplate>
      <Container>
        {/* Seção Perfil */}
        <ProfileSection>
          <Avatar src={PROFILE_DATA.avatarUrl} alt={`Foto de ${PROFILE_DATA.name}`} />
          <Title size="large" as="h1">{PROFILE_DATA.name}</Title>
          <Button variant="primary" ariaLabel="Entre em contato">{PROFILE_DATA.contactText}</Button>
        </ProfileSection>

        {/* Seção Sobre Mim */}
        <AboutMeSection />

        {/* Seção Projetos */}
        <ProjectsSection />

        {/* Seção Últimas Postagens */}
        <BlogSection />
      </Container>
    </MainTemplate>
  )
}

export default HomePage
