import Button from "./Button";

export default {
  title: "Common/Button",
  component: Button,
};

export const HelloButton = () => <Button>Hello World!</Button>;
export const ClickButton = () => <Button>Click!</Button>;
export const Default = () => <Button>Default</Button>;
export const Primary = () => <Button color="primary">Primary</Button>;
