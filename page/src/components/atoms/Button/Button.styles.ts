import styled from 'styled-components'

export const StyledButton = styled.button<{ variant: string; fullWidth: boolean }>`
  background-color: ${({ variant, theme }) =>
    variant === 'primary' ? theme.primary :
    variant === 'secondary' ? theme.secondary :
    theme.dark};
  color: ${({ theme }) => theme.buttonText};
  padding: 10px 16px;
  border: 2px solid ${({ theme }) => theme.buttonBorder};
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  &:hover {
    opacity: 0.8;
  }
`
