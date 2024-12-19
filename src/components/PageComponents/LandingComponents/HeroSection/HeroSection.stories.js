import { Provider } from 'react-redux';
import { decorators } from '../../../../../.storybook/preview';
import { store } from '../../../../redux/store/store';
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
