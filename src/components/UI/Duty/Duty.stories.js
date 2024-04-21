import React from 'react';
import Duty from './Duty';

export default {
  title: 'UI/Duty',
  component: Duty,
  argTypes: {
    duty: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Duty {...args} />;

export const Default = Template.bind({});
Default.args = {
  duty: 'FrontEnd Development',
};
