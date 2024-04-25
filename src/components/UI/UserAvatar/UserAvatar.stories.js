import React from 'react';
import { decorators } from '../../../../.storybook/preview';
import UserAvatar from './UserAvatar';

export default {
  title: 'UI/UserAvatar',
  component: UserAvatar,
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

export const Default = (args) => <UserAvatar {...args} />;
Default.args = {
  nameUser: 'а а',
  width: '132px',
  height: '132px',
  borderRadius: '4px',
};
