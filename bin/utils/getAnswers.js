import inquirer from 'inquirer';
import { COMPONENT_TYPES } from '../constants/index.js';

const getAnswers = async () => {
  return await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: 'What to generate?',
      choices: [COMPONENT_TYPES.COMPONENT, COMPONENT_TYPES.PAGE, COMPONENT_TYPES.SLICE, COMPONENT_TYPES.API_SLICE],
    },
    {
      type: 'input',
      name: 'name',
      message: 'Name:',
      validate: (input) => (input ? true : 'The name cannot be empty'),
    },
  ]);
};

export default getAnswers;
