import HeroSection from './HeroSection';
import { decorators } from '../../../../.storybook/preview';
import { store } from '../../../redux/store/store';
import { Provider } from 'react-redux';
import React from 'react';

export default {
  title: 'LandingComponents/HeroSection',
  component: HeroSection,
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
    <HeroSection />
  </Provider>
);
