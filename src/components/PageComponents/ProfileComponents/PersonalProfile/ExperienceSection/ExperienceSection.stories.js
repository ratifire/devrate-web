import React from 'react';
import ExperienceSection from './ExperienceSection';
import { Provider } from 'react-redux';
import { store } from '../../../../../redux/store/store';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'ProfileComponents/ExperienceSection',
  component: ExperienceSection,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => (
  <Provider store={store}>
    <Router>
      <ExperienceSection />
    </Router>
  </Provider>
);
