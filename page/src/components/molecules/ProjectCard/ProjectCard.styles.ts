import styled from 'styled-components'

export const ProjectCardContainer = styled.div`
  width: 100%;
  max-width: 320px; /* Mantém uma largura padrão */
  background: ${({ theme }) => theme.cardBg};
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.text}30;
  align-items: center;
`

export const PlaceholderImage = styled.div`
  width: 100%;
  height: 150px;
  background: #ccc;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProjectTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`

export const ProjectDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  text-align: center;
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 8px;
`
