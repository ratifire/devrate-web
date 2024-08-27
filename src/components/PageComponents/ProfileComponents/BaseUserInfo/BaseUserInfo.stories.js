import React from 'react';
import BaseUserInfo from './BaseUserInfo';
import { decorators } from '../../../../../.storybook/preview';

export default {
  title: 'Profile/BaseUserInfo',
  component: BaseUserInfo,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: decorators,
};

export const Default = (args) => <BaseUserInfo {...args} />;
Default.args = {
  width: '480px',
  height: 'auto',
};
