import React from 'react';
import SkillsSection from './SkillsSection';

export default {
  title: 'Profile/SkillsSection',
  component: SkillsSection,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
};

export const Default = (args) => <SkillsSection {...args} />;
Default.args = {
  width: '606px',
  height: '260px',
};
