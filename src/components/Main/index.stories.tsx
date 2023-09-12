import Main, { MainProps } from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Main",
  component: Main,
  args: {
    title: "React Avançado",
    description: "TypeScript, ReactJS, NextJS e Styled Components"
  },
  parameters: {
    layout: "fullscreen"
  }
} as Meta<MainProps>;

export const Default: StoryObj<MainProps> = {};
