import React from 'react';
import Footer from './Footer';
import { decorators } from '../../../../../.storybook/preview';
import { BrowserRouter as Router } from 'react-router-dom';

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
