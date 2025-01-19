import React from "react";
import { useTheme } from "~/contexts/ThemeContext";
import { Button } from "./ThemeToggle.styles";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </Button>
  );
};

export default ThemeToggle;
