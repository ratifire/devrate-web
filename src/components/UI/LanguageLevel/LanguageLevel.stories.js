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
const languageLevel = [
  {
    id: 1,
    language: 'UK',
    level: 'Native: C1',
  },
  {
    id: 2,
    language: 'EN',
    level: 'Upper-intermediate: B2',
  },
  {
    id: 3,
    language: 'FR',
    level: 'Intermediate: B1',
  },
];
export const Default = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
    }}
  >
    <LanguageLevel key={languageLevel.id} language={languageLevel.language} level={languageLevel.level} />
  </Box>
);
