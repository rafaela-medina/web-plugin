import React from 'react'
import { Container, Description, ContactButtons } from './AboutMe.styles'
import { ContactButton } from '~/components/molecules/ContactButton'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

interface AboutMeProps {
  description: string
  email: string
  linkedin: string
  github: string
}

const AboutMe: React.FC<AboutMeProps> = ({ description, email, linkedin, github }) => {
  return (
    <Container>
      <Description>{description}</Description>
      <ContactButtons>
        <ContactButton type="email" url={`mailto:${email}`} label="Email" icon={<FaEnvelope />} />
        <ContactButton type="linkedin" url={linkedin} label="LinkedIn" icon={<FaLinkedin />} />
        <ContactButton type="github" url={github} label="GitHub" icon={<FaGithub />} />
      </ContactButtons>
    </Container>
  )
}

export default AboutMe
