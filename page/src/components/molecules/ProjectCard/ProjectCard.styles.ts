import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 350px;
  margin-bottom: 20px;
`

export const ProjectImage = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 5px;
  object-fit: cover;
  margin-bottom: 10px;
`

export const ProjectDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
`
