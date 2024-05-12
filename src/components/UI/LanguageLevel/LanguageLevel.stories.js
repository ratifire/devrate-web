import React from 'react';
import { decorators } from '../../../../.storybook/preview';
import LanguageLevel from './LanguageLevel';
import { Box } from '@mui/material';

export default {
  title: 'UI/LanguageLevel',
  component: LanguageLevel,
  tags: ['autodocs'],
  decorators: decorators,
  parameters: {
    layout: 'centered',
  },
};
const languagesLevel = [
  {
    language: 'UK',
    level: 'Native: C1',
  },
  {
    language: 'EN',
    level: 'Upper-intermediate: B2',
  },
  {
    language: 'FR',
    level: 'Intermediate: B1',
  },
];
export const Default = () => (
  <Box
    sx={{
      display: 'flex',
      gridGap: 8,
      alignItems: 'center',
      flexWrap: 'wrap',
    }}
  >
    <LanguageLevel key={languagesLevel.id} language={languagesLevel.language} level={languagesLevel.level} />
  </Box>
);
