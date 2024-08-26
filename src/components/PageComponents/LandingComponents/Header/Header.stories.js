import React from 'react';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store/store';
import { decorators } from '../../../../.storybook/preview';

export default {
  title: 'LandingComponents/Header',
  component: Header,
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
      <Header />
    </Router>
  </Provider>
);
