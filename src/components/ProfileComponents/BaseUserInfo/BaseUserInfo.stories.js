import React from 'react';
import BaseUserInfo from './BaseUserInfo';

export default {
  title: 'Profile/BaseUserInfo',
  component: BaseUserInfo,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
};

export const Default = (args) => <BaseUserInfo {...args} />;
Default.args = {
  width: '480px',
  height: 'auto',
};
