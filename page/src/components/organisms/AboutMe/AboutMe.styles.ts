import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
  max-width: 600px;
  margin: 0 auto;
`

export const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => (theme === 'dark' ? '#ddd' : '#333')};
  margin-bottom: 20px;
`

export const ContactButtons = styled.div`
  display: flex;
  gap: 12px;
`
