import React from 'react';
import SpecialisationCategories from './SpecialisationCategories';
import { decorators } from '../../../../.storybook/preview';

export default {
  title: 'Specialisation/SpecialisationCategories',
  component: SpecialisationCategories,
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

export const Default = (args) => <SpecialisationCategories {...args} />;
Default.args = {
  width: 'auto',
  height: '170px',
};
