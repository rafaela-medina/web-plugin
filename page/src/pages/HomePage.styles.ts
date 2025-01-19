import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 16px;
  }
`
export const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
`

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 10px;
`

export const UserName = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`

export const ContactButton = styled.button`
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  padding: 10px 16px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`

export const Section = styled.section`
  width: 100%;
  padding: 20px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 10px;
  margin-bottom: 40px;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 350px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`

export const FullWidthButton = styled.button`
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  padding: 10px 16px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  max-width: 350px;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`


export const ProjectImage = styled.div`
  width: 100%;
  height: 180px;
  background-color: #ccc; /* Simulando uma imagem de projeto */
  margin-bottom: 10px;
`

export const ProjectTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`

export const ProjectDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
`

export const ProjectButton = styled.button`
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  padding: 10px 16px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};
  font-size: 14px;
  text-align: center;
`
