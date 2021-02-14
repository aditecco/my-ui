/* ---------------------------------
Spinner stories
--------------------------------- */

import * as React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Spinner, {
  SpinnerContainerProps,
  SpinnerProps,
} from "../components/Spinner";

export default {
  title: "Loading UI/Spinner",
  component: Spinner,
  argTypes: {},
} as Meta;

const Template: Story<SpinnerContainerProps & SpinnerProps> = args => (
  <Spinner {...args} />
);

export const Base = Template.bind({});
Base.args = {};
