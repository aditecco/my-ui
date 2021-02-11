/* ---------------------------------
RatingControls.stories.tsx
--------------------------------- */

import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import RatingControls from "../components/RatingControls";

export default {
  title: "Controls/RatingControls",
  component: RatingControls,
  argTypes: {},
} as Meta;

const Template: Story<{}> = (args) => <RatingControls {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
