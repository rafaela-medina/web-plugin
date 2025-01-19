import styled from 'styled-components'

export const AboutMeContainer = styled.section`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.text}; 
  border-radius: 10px;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 16px;
  }
`

export const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 15px;
`

export const SkillsTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`

export const SkillCategory = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0 5px;
`

export const SkillItem = styled.p`
  font-size: 14px;
  margin: 3px 0;
`
