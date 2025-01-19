import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background-color: ${({ theme }) => (theme === 'dark' ? '#222' : '#fff')};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Name = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#333')};
  margin: 0;
`

export const Nav = styled.nav`
  display: flex;
  gap: 16px;
`

export const NavLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#333')};
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => (theme === 'dark' ? '#bbb' : '#555')};
  }
`
