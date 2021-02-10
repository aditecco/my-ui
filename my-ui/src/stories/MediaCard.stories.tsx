/* ---------------------------------
MediaCard stories
--------------------------------- */

import * as React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { MediaCard, MediaCardProps } from "../components/MediaCard";
// @ts-ignore
import bg from "./_assets/img/pawel-czerwinski-ruJm3dBXCqw-unsplash.jpg";

export default {
  title: "Cards/MediaCard",
  component: MediaCard,
  argTypes: {},
} as Meta;

const Template: Story<MediaCardProps> = (args) => <MediaCard {...args} />;

const content = {
  background: bg,
  title: "Example MediaCard",
  infoItem_01: { year: "1986" },
  infoItem_02: { country: "Germany" },
  infoItem_03: { director: "W. Herzog" },
};

export const Base = Template.bind({});
Base.args = {
  ...content,
};

export const WithRating = Template.bind({});
WithRating.args = {
  ...content,
  withRating: true,
};
