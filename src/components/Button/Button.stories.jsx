import Button from "./Button";

export default {
  title: "Common/Button",
  component: Button,
};

export const HelloButton = () => <Button>Hello World!</Button>;
export const ClickButton = () => <Button>Click!</Button>;
export const Default = () => <Button>Default</Button>;
export const Primary = () => <Button color="primary">Primary</Button>;
export const Danger = () => <Button color="danger">Danger</Button>;
export const PrimarySmall = () => (
  <Button size="sm" color="primary">
    Small
  </Button>
);
export const PrimaryLarge = () => (
  <Button size="lg" color="primary">
    Large
  </Button>
);
const Template = (args) => <Button {...args} />;
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
