import React from 'react';
import { decorators } from '../../../../../../.storybook/preview';
import BaseUserInfo from './BaseUserInfo';

export default {
  title: 'ProfileComponents/BaseUserInfo',
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
