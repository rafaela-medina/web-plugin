import styled from 'styled-components'

export const ThemeSwitcherContainer = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.2s;
  position: absolute;
  top: 72px;
  right: 16px;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    top: 60px;
    right: 12px;
  }
`
