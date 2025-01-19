import React from 'react'
import { MainTemplate } from '~/components/templates/MainTemplate'
import { PageContainer, ProfileSection, Avatar, UserName, ContactButton, Section, Card, ProjectImage, ProjectTitle, ProjectDescription, ProjectButton, FullWidthButton, FooterContainer } from './HomePage.styles'

const HomePage: React.FC = () => {
  return (
    <MainTemplate>
      <PageContainer>
        <ProfileSection>
          <Avatar src="https://via.placeholder.com/150" alt="Perfil" />
          <UserName>Fulane</UserName>
          <ContactButton>Entre em contato</ContactButton>
        </ProfileSection>

        <Section>
          <h2>Sobre mim</h2>
          <p>Qualquer conteúdo textual inventado da sua preferência</p>
          <h3>Habilidades</h3>
          <p><strong>Ferramentas</strong></p>
          <p>Sketch</p>
          <p><strong>Metodologias</strong></p>
          <p>Duplo Diamante</p>
          <p>Scrum</p>
          <p><strong>Banco de dados</strong></p>
          <p>Firebase</p>
        </Section>

        <Section>
          <h2>Projetos</h2>
          <Card>
            <ProjectImage />
            <ProjectTitle>Nome do projeto</ProjectTitle>
            <ProjectDescription>Descrição sobre o projeto</ProjectDescription>
            <ProjectButton>Ver mais</ProjectButton>
          </Card>
          <FullWidthButton>Ver todos os projetos</FullWidthButton>
        </Section>

        <Section>
          <h2>Últimas postagens</h2>
          <FullWidthButton>Ver todas as postagens</FullWidthButton>
        </Section>
      </PageContainer>
    </MainTemplate>
  )
}

export default HomePage
