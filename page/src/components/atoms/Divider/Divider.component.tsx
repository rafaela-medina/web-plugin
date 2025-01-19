import styled from 'styled-components'

const StyledDivider = styled.hr<{ thickness: number; width: string; color: string }>`
  border: none;
  height: ${({ thickness }) => thickness}px;
  width: ${({ width }) => width};
  background-color: ${({ color }) => color};
  margin: 16px 0;
`

export default StyledDivider
