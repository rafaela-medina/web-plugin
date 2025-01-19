import styled from 'styled-components'

export const Text = styled.p<{ variant: 'title' | 'subtitle' | 'body' }>`
  font-family: 'Lato', sans-serif;
  margin: 0;

  ${({ variant }) =>
    variant === 'title' &&
    `
    font-size: 24px;
    font-weight: bold;
  `}

  ${({ variant }) =>
    variant === 'subtitle' &&
    `
    font-size: 18px;
    font-weight: semi-bold;
  `}

  ${({ variant }) =>
    variant === 'body' &&
    `
    font-size: 16px;
    font-weight: normal;
  `}
`
