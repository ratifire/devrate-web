import React from 'react';
import { decorators } from '../../../../../.storybook/preview';
import SpecializationCategories from './SpecializationCategories';

export default {
  title: 'Specialization/SpecializationCategories',
  component: SpecializationCategories,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: decorators,
};

export const Default = (args) => <SpecializationCategories {...args} />;
Default.args = {
  width: 'auto',
  height: '170px',
};
