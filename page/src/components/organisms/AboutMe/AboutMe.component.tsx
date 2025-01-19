import React from "react";
import { ABOUT_ME } from "~/data/mockData";
import {
  AboutMeContainer,
  Title,
  Description,
  SkillsTitle,
  SkillCategory,
  SkillItem,
} from "./AboutMe.styles";

export const AboutMe: React.FC = () => (
  <AboutMeContainer>
    <Title>Sobre mim</Title>
    <Description>{ABOUT_ME.description}</Description>

    <SkillsTitle>Habilidades</SkillsTitle>

    {ABOUT_ME.skills.map((skill) => (
      <div key={skill.category}>
        <SkillCategory>{skill.category}</SkillCategory>
        {skill.items.map((item) => (
          <SkillItem key={item}>{item}</SkillItem>
        ))}
      </div>
    ))}
  </AboutMeContainer>
);
