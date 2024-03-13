import AboutSection from './AboutSection';
import { decorators } from '../../../../.storybook/preview';

export default {
  title: 'Sections/AboutSection',
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
