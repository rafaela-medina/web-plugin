import styled from 'styled-components'

export const SectionContainer = styled.section`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    width: 90%;
    padding: 16px;
    background: ${({ theme }) => theme.cardBg};
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.text}30;
  }
`
