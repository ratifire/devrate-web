import React from 'react';
import { BrowserRouter as Router } from 'react-router';
import { decorators } from '../../../../../.storybook/preview';
import Footer from './Footer';

export default {
  title: 'LandingComponents/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  decorators: decorators,
};

export const Default = () => (
  <Router>
    <Footer />
  </Router>
);
