import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }
`