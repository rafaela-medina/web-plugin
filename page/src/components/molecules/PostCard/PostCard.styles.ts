import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  padding: 15px;
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
  text-align: center;
`

export const PostDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`
