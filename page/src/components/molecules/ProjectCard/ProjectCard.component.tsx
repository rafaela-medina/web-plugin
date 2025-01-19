import React from "react";
import {
  ProjectCardContainer,
  PlaceholderImage,
  ProjectTitle,
  ProjectDescription,
  ButtonContainer,
} from "./ProjectCard.styles";
import { Button } from "~/components/atoms/Button/Button.component";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
}): JSX.Element => (
  <ProjectCardContainer>
    <PlaceholderImage />
    <ProjectTitle>{title}</ProjectTitle>
    <ProjectDescription>{description}</ProjectDescription>
    <ButtonContainer>
      <Button variant="primary" ariaLabel="Ver mais sobre o projeto">
        Ver mais
      </Button>
    </ButtonContainer>
  </ProjectCardContainer>
);
