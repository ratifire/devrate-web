import { Box } from '@mui/material';
import { decorators } from '../../../../.storybook/preview';
import LanguagesList from './LanguagesList';

export default {
  title: 'UI/LanguagesList',
  component: LanguagesList,
  tags: ['autodocs'],
  decorators: decorators,
  parameters: {
    layout: 'centered',
  },
};
const languagesList = [
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
      gridGap: 8,
      alignItems: 'center',
      flexWrap: 'wrap',
    }}
  >
    <LanguagesList data={languagesList} />
  </Box>
);
