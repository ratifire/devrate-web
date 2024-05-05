import React from 'react';
import UserMenu from './UserMenu';
import { decorators } from '../../../../.storybook/preview';


export default {
  title: 'UI/UserMenu',
  component: UserMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: decorators,
};

export const Default = () => <UserMenu isDrawerOpen toggleDrawer={decorators.action('toggleDrawer')} />;

export const Open = () => <UserMenu isDrawerOpen={true} toggleDrawer={decorators.action('toggleDrawer')} />;

export const Closed = () => <UserMenu isDrawerOpen={false} toggleDrawer={decorators.action('toggleDrawer')} />;

