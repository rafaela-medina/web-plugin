import styled from 'styled-components'

export const StyledAvatar = styled.img<{ size: 'small' | 'medium' | 'large'; round: boolean }>`
  width: ${({ size }) =>
    size === 'small' ? '32px' : size === 'medium' ? '64px' : '96px'};
  height: ${({ size }) =>
    size === 'small' ? '32px' : size === 'medium' ? '64px' : '96px'};
  border-radius: ${({ round }) => (round ? '50%' : '8px')};
  object-fit: cover;
  border: 2px solid #ddd;
`
