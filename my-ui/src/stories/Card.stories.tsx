/* ---------------------------------
Card stories
--------------------------------- */

import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Card from "../components/Card";

export default {
  title: "Example/Card",
  component: Card,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
