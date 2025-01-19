import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 20px;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  font-size: 14px;
  position: fixed;
  text-align: center;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;

  @media (max-width: 768px) {
    padding: 12px;
  }
`
