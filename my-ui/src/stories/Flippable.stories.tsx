/* ---------------------------------
Flippable stories
--------------------------------- */

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Flippable, { FlippableProps } from "../components/Flippable";
import Card from "../../components/Card";
import CardBack from "../../components/CardBack";

export default {
  title: "Example/Flippable",
  component: Flippable,
  argTypes: {},
} as Meta;

const Template: Story<FlippableProps> = (args) => <Flippable {...args} />;

export const FlippableCard = Template.bind({});
FlippableCard.args = {
  Front: Card,
  // back: <CardBack />,
  Back: ({ toggleFlipped }) => (
    <button onClick={(_) => toggleFlipped(false)}>Flip it!</button>
  ),
};
