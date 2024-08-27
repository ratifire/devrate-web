import { action } from '@storybook/addon-actions';
import TextAreaInput from './TextAreaInput';
import { decorators } from '../../../../.storybook/preview';

export default {
  title: 'Form/Inputs/TextAreaInput',
  component: TextAreaInput,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: 'Text',
    placeholder: 'Placeholder',
    helperText: 'Please correct the description above',
    type: 'text',
    error: false,
  },
  decorators: decorators,
};

export const TextInput = {
  args: {
    name: 'modal.editPage.personalInformation.title',
    value: '',
    handleChange: action('handleChange'),
    type: 'text',
    label: 'modal.editPage.personalInformation.title',
    helperText: '',
    error: false
  },
};

export const TextInputError = {
  args: {
    name: 'modal.editPage.personalInformation.title',
    value: '',
    handleChange: action('handleChange'),
    type: 'text',
    label: 'modal.editPage.personalInformation.title',
    helperText: 'modal.registration.required',
    error: true
  },
};