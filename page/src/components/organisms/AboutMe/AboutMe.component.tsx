import React from 'react'
import { Container, Description } from './AboutMe.styles'

interface AboutMeProps {
  description: string
  email: string
  linkedin: string
  github: string
}

const AboutMe: React.FC<AboutMeProps> = ({ description}) => {
  return (
    <Container>
      <Description>{description}</Description>
    </Container>
  )
}

export default AboutMe
