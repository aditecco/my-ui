/* ---------------------------------
Card stories
--------------------------------- */

import * as React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Button, ButtonProps, OutlineButton } from "../components/Button";

export default {
  title: "Buttons/OutlineButton",
  component: OutlineButton,
  argTypes: {},
} as Meta;

const Template: Story<ButtonProps> = args => <OutlineButton {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: "Click me",
  onClick: _ => console.log("CLICKED!"),
};
