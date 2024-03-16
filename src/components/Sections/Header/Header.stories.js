import React from 'react';
import Header from './Header';
import { decorators } from '../../../../.storybook/preview'
import { BrowserRouter as Router } from 'react-router-dom'; 


export default {
  title: 'Sections/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: decorators,
};

export const Default = () => (
  <Router>
    <Header/>
  </Router>
);