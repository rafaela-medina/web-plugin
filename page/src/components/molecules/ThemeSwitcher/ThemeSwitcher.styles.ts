import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const ThemeText = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#333')};
`
