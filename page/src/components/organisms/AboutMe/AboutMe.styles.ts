import styled from 'styled-components'

export const SectionContainer = styled.section`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 10px;
  text-align: left;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  margin: 0 auto 40px auto;
`
