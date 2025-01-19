import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  font-size: 14px;
  text-align: center;
  bottom: 0;
  left: 0;
  right: 0;

  @media (max-width: 768px) {
    padding: 16px;
  }
`

export const FooterText = styled.p`
  margin: 0;
`
