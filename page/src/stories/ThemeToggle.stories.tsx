import type { Meta, StoryObj } from "@storybook/react";
import { ThemeToggle } from "~/components/atoms/ThemeToggle";
import { ThemeProvider } from "~/contexts/ThemeContext";

const meta: Meta<typeof ThemeToggle> = {
  title: "Atoms/ThemeToggle",
  component: ThemeToggle,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {};
