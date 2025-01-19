import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: ${({ theme }) => (theme === 'dark' ? '#222' : '#f1f1f1')};
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#333')};
  font-size: 14px;
  text-align: center;
  position: relative;
  width: 100%;
`

export const FooterText = styled.p`
  margin: 0;
`

export const FooterLink = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => (theme === 'dark' ? '#bbb' : '#007bff')};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => (theme === 'dark' ? '#888' : '#0056b3')};
  }
`
