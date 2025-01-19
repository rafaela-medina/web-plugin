import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
  width: 100%;
  max-width: 350px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`

export const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin: 8px 0;
`

export const Button = styled.a`
  display: inline-block;
  padding: 8px 12px;
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
