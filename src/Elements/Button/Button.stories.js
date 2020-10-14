import React from 'react';

import { Button } from './Button';

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} > Button text</Button>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true
};


export const Large = Template.bind({});
Large.args = {
  size: 'large'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};
