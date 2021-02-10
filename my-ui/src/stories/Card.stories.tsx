/* ---------------------------------
Card stories
--------------------------------- */

import * as React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Card from "../components/Card";
// @ts-ignore
import bg from "./_assets/img/pawel-czerwinski-ruJm3dBXCqw-unsplash.jpg";

export default {
  title: "Cards/Card",
  component: Card,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <Card {...args} />;

export const Base = Template.bind({});
Base.args = {};
