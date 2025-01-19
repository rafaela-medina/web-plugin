import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${({ theme }) => (theme.mode === 'dark' ? '#333' : '#fff')};
  color: ${({ theme }) => (theme.mode === 'dark' ? '#fff' : '#333')};
  border: 1px solid ${({ theme }) => (theme.mode === 'dark' ? '#fff' : '#333')};
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }
`
