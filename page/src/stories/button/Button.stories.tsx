import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "~/components/atoms/Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  args: {
    variant: "primary",
    children: "Clique Aqui",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Botão Primário",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Botão Secundário",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    disabled: true,
    children: "Botão Desativado",
  },
};
