import { Provider } from 'react-redux';
import { store } from '@redux/store/config.js';
import { decorators } from '../../../../../.storybook/preview';
import HeroSection from './HeroSection';

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
