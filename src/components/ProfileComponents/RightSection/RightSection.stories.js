import React from 'react';
import RightSection from './RightSection';

export default {
  title: 'Profile/RightSection',
  component: RightSection,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
};

export const Default = (args) => <RightSection {...args} />;
Default.args = {
  width: '354px',
  height: 'auto',
};
