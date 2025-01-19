import styled from 'styled-components'

export const StyledTitle = styled.h1<{ size: string; align: string }>`
  font-size: ${({ size }) =>
    size === 'small' ? '16px' :
    size === 'medium' ? '20px' : '24px'};
  text-align: ${({ align }) => align};
  font-weight: bold;
  margin-bottom: 10px;
`
