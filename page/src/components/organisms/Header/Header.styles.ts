import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 16px;
  background-color: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.text};
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (max-width: 768px) {
    height: 50px;
    padding: 12px;
  }
`
