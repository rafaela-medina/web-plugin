import { render, screen } from "@testing-library/react";
import Typography from "./Typography.component";

test("deve renderizar um título corretamente", () => {
  render(<Typography variant="title">Título de Teste</Typography>);

  const text = screen.getByText("Título de Teste");

  expect(text).toBeInTheDocument();
  expect(text).toHaveStyle("font-size: 24px");
});

test("deve renderizar um subtítulo corretamente", () => {
  render(<Typography variant="subtitle">Subtítulo de Teste</Typography>);

  const text = screen.getByText("Subtítulo de Teste");

  expect(text).toBeInTheDocument();
  expect(text).toHaveStyle("font-size: 18px");
});

test("deve renderizar um texto de corpo corretamente", () => {
  render(<Typography variant="body">Texto de corpo</Typography>);

  const text = screen.getByText("Texto de corpo");

  expect(text).toBeInTheDocument();
  expect(text).toHaveStyle("font-size: 16px");
});
