import { BrowserRouter as Router } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '@redux/store/config.js';
import { decorators } from '../../../../../.storybook/preview';
import Header from './Header';

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
