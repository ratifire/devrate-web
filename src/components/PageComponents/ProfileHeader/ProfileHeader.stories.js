import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store/store';
import { decorators } from '../../../../.storybook/preview';
import ProfileHeader from './index';

export default {
  title: 'Profile/ProfileHeader',
  component: ProfileHeader,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  decorators: decorators,
};

export const Default = () => (
  <Provider store={store}>
    <Router>
      <ProfileHeader />
    </Router>
  </Provider>
);
