import styled from 'styled-components'

export const StyledButton = styled.button<{ variant: 'primary' | 'secondary'; disabled?: boolean }>`
  padding: 10px 16px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease-in-out;
  border: none;
  outline: none;

  ${({ variant }) =>
    variant === 'primary' &&
    `
    background-color: #007bff;
    color: #fff;

    &:hover {
      background-color: #0056b3;
    }
  `}

  ${({ variant }) =>
    variant === 'secondary' &&
    `
    background-color: #6c757d;
    color: #fff;

    &:hover {
      background-color: #545b62;
    }
  `}

  ${({ disabled }) =>
    disabled &&
    `
    background-color: #ddd;
    color: #999;
  `}
`
