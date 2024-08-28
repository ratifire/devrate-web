import React from 'react';
import Menu from './Menu';
import { decorators } from '../../../../.storybook/preview';

export default {
  title: 'UI/Menu',
  component: Menu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: decorators,
};

export const Default = () => <Menu isDrawerOpen toggleDrawer={decorators.action('toggleDrawer')} />;

export const Open = () => <Menu isDrawerOpen={true} toggleDrawer={decorators.action('toggleDrawer')} />;

export const Closed = () => <Menu isDrawerOpen={false} toggleDrawer={decorators.action('toggleDrawer')} />;
