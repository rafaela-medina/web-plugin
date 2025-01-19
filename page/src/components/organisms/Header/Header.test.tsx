import { render, screen } from '@testing-library/react'
import { Header } from './Header.component'
import { ThemeProvider } from '~/contexts/ThemeContext'

const mockProps = {
  userName: 'John Doe',
  avatarUrl: 'https://via.placeholder.com/150',
  links: [
    { label: 'Home', href: '/' },
    { label: 'Projetos', href: '/projects' },
  ],
}

test('deve renderizar o nome do usuário', () => {
  render(
    <ThemeProvider>
      <Header {...mockProps} />
    </ThemeProvider>
  )

  expect(screen.getByText(mockProps.userName)).toBeInTheDocument()
})

test('deve renderizar os links corretamente', () => {
  render(
    <ThemeProvider>
      <Header {...mockProps} />
    </ThemeProvider>
  )

  expect(screen.getByText('Home')).toBeInTheDocument()
  expect(screen.getByText('Projetos')).toBeInTheDocument()
})

test('deve renderizar o avatar corretamente', () => {
  render(
    <ThemeProvider>
      <Header {...mockProps} />
    </ThemeProvider>
  )

  const avatar = screen.getByAltText(mockProps.userName)
  expect(avatar).toBeInTheDocument()
  expect(avatar).toHaveAttribute('src', mockProps.avatarUrl)
})
