import React from "react";
import { withDesign } from "storybook-addon-designs";
import { parameters } from "../../.storybook/preview";
import { Button } from "./Button";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: {       
      control: "color" 
    },
    
  },
  decorators: [withDesign],
};

const Template = (args) => <Button {...args} {...parameters} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
  onClick: { action: 'clicked' }
};
Primary.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
    ],
  },
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/1FKv8rAqXRKB57FeJNi9rh/Untitled?node-id=2%3A3",
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
