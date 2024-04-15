import React from 'react';
import ProfileHeader from './ProfileHeader';
import { decorators } from '../../../../.storybook/preview';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store/store';

export default {
  title: 'Sections/ProfileHeader',
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
