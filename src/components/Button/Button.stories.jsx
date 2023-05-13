import { action } from "@storybook/addon-actions";
import Button from "./Button";
import { linkTo } from "@storybook/addon-links";

export default {
  title: "Common/Test",
  component: Button,
  argTypes: {
    color: {
      options: ["primary", "default", "danger"],
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "base", "lg"],
      control: { type: "select" },
    },
  },
};

const something = action("something");

const Template = (args) => {
  return <Button {...args} handleClick={linkTo("common/Button", "Primary")} />;
};
export const DefaultArgs = Template.bind({});
DefaultArgs.args = {
  children: "Default",
};
export const PrimaryArgs = Template.bind({});
PrimaryArgs.args = {
  children: "Default",
  color: "primary",
};
export const PrimaryLargeArgs = Template.bind({});
PrimaryLargeArgs.args = {
  ...PrimaryArgs.args,
  size: "lg",
};
