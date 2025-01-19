import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;

  @media (min-width: 1024px) {
    max-width: 900px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    padding: 10px;
    width: 100vw;
  }
`
