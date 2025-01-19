import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const CategoryTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`

export const Skills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  list-style: none;
`

export const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  background-color: #f5f5f5;
`
