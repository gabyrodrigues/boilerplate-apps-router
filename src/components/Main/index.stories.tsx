import Main, { MainProps } from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Main",
  component: Main,
  parameters: {
    layout: "fullscreen"
  }
} as Meta<MainProps>;

export const Default: StoryObj<MainProps> = {};

export const Basic: StoryObj<MainProps> = {
  args: {
    title: "Basic React Avançado",
    description: "Basic TypeScript, ReactJS, NextJS e Styled Components"
  }
};
