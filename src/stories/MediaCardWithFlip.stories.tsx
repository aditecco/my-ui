/* ---------------------------------
MediaCardWithFlip stories
--------------------------------- */

import * as React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import {
  MediaCardWithFlip,
  MediaCardWithFlipProps,
} from "../components/MediaCardWithFlip";
// @ts-ignore
import bg from "./_assets/img/pawel-czerwinski-ruJm3dBXCqw-unsplash.jpg";

export default {
  title: "Cards/MediaCardWithFlip",
  component: MediaCardWithFlip,
  argTypes: {},
} as Meta;

const Template: Story<MediaCardWithFlipProps> = (args) => (
  <MediaCardWithFlip {...args} />
);

export const Base = Template.bind({});
Base.args = {
  background: bg,
  title: "Example MediaCard",
  infoItem_01: { year: "1986" },
  infoItem_02: { country: "Germany" },
  infoItem_03: { director: "W. Herzog" },
  info: {
    lumen: "Nunquam acquirere humani generis.",
    zelus: "Nomens accelerare in dexter vasa!",
    divio: "Azureus abactor interdum anhelares frondator est.",
    Hercle: "Ire inciviliter ducunt ad bi-color medicina.",
  },
  withRating: true,
};
