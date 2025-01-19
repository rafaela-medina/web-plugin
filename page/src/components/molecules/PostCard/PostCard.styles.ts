import styled from 'styled-components'

export const PostCardContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.cardBg};
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: 1px solid ${({ theme }) => theme.text}30;
  
  .post-date {
    font-size: 14px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-top: 4px;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.text};
  }
`
