/* ---------------------------------
Card stories
--------------------------------- */

import * as React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from "../components/Button";

export default {
  title: "Buttons/Button",
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: "Click me",
  onClick: _ => console.log("CLICKED!"),
};
