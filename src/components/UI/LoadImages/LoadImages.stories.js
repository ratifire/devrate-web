import { decorators } from '../../../../.storybook/preview';
import LoadImages from './LoadImages';

export default {
  title: 'UI/LoadImages',
  component: LoadImages,
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

export const Default = (args) => <LoadImages {...args} />;
