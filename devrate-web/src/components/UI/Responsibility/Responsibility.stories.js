import React from 'react';
import Responsibility from './Responsibility';

export default {
  title: 'UI/Responsibility',
  component: Responsibility,
  argTypes: {
    responsibility: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Responsibility {...args} />;

export const Default = Template.bind({});
Default.args = {
  responsibility: 'FrontEnd Development',
};
