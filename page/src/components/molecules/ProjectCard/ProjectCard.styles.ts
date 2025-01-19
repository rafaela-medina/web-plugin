import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`

export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`

export const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`

export const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0;
`

export const Button = styled.a`
  display: inline-block;
  padding: 10px 12px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`
