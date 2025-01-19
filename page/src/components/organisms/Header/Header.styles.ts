import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.text};
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`
