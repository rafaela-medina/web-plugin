import styled from 'styled-components'

export const StyledButton = styled.a<{ variant: 'email' | 'linkedin' | 'github' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  color: white;
  border: none;
  cursor: pointer;

  ${({ variant }) =>
    variant === 'email' &&
    `
    background-color: #ea4335;

    &:hover {
      background-color: #c5221f;
    }
  `}

  ${({ variant }) =>
    variant === 'linkedin' &&
    `
    background-color: #0077b5;

    &:hover {
      background-color: #005582;
    }
  `}

  ${({ variant }) =>
    variant === 'github' &&
    `
    background-color: #24292e;

    &:hover {
      background-color: #181b1e;
    }
  `}
`
