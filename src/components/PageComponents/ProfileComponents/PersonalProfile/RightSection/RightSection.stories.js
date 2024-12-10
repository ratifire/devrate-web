import { BrowserRouter as Router } from 'react-router';
import { decorators } from '../../../../../../.storybook/preview';
import RightSection from './RightSection';

export default {
  title: 'ProfileComponents/RightSection',
  component: RightSection,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  decorators: decorators,
};

export const Default = (args) => (
  <Router>
    <RightSection {...args} />
  </Router>
);
Default.args = {
  width: '354px',
  height: 'auto',
};
