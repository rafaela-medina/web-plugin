import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#fff' : '#333')};
  margin-bottom: 20px;
`

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`
