import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.text};
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 12px;
  }
`
