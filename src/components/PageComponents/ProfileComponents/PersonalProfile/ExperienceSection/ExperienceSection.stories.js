import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../../../../../redux/store/store';
import ExperienceSection from './ExperienceSection';

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
