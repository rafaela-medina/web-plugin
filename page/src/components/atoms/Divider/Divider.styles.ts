import styled from 'styled-components'

export const StyledDivider = styled.hr`
  border: none;
  height: 1px;
  background-color: ${({ theme }) => theme.text};
  margin: 20px 0;
  width: 100%;
`
