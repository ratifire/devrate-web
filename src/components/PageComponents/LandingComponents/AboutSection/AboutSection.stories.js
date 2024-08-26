import AboutSection from './AboutSection';
import { decorators } from '../../../../.storybook/preview';

export default {
  title: 'LandingComponents/AboutSection',
  component: AboutSection,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  decorators: decorators,
};

export const Default = {};
