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

const languageDeleteHandler = (language) => {
  console.log(`Deleting language: ${language}`);
  // Here should be added more logic to handle deletion of the languages in Modal
};

export const Default = () => (
  <Box
    sx={{
      display: 'flex',
      gridGap: 8,
      alignItems: 'center',
      flexWrap: 'wrap',
    }}
  >
    {languageLevel.map(({ id, language, level, tobeDeleted }) => (
      <LanguageLevel
        key={id}
        language={language}
        level={level}
        tobeDeleted={tobeDeleted}
        languageDeleteHandler={languageDeleteHandler}
      />
    ))}
  </Box>
);
