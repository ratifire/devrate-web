import { action } from '@storybook/addon-actions';
import FormInput from './FormInput';
import { decorators } from '../../../../.storybook/preview';

export default {
  title: 'Form/Inputs/FormInput',
  component: FormInput,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: 'Email',
    helperText: 'Please enter your email',
    type: 'email',
    error: false,
  },
  decorators: decorators,
};

export const TextInput = {
  args: {
    name: 'text',
    value: '',
    handleChange: action('handleChange'),
    handleBlur: action('handleBlur'),
    showPassword: false,
    type: 'email',
    label: 'modal.checkEmailResetPassword.email',
    helperText: '',
    error: false,
    clickHandler: action('clickHandler'),
    mouseDownHandler: action('mouseDownHandler'),
  },
};
export const TextInputError = {
  args: {
    name: 'email',
    value: '',
    handleChange: action('handleChange'),
    handleBlur: action('handleBlur'),
    showPassword: false,
    type: 'email',
    label: 'modal.checkEmailResetPassword.email',
    helperText: 'modal.registration.required',
    error: true,
    clickHandler: action('clickHandler'),
    mouseDownHandler: action('mouseDownHandler'),
  },
};
export const PasswordInput = {
  args: {
    name: 'password',
    value: '',
    handleChange: action('handleChange'),
    handleBlur: action('handleBlur'),
    showPassword: false,
    type: 'password',
    label: 'modal.resetPassword.password',
    helperText: '',
    error: false,
    clickHandler: action('clickHandler'),
    mouseDownHandler: action('mouseDownHandler'),
  },
};
export const PasswordInputError = {
  args: {
    name: 'password',
    value: '',
    handleChange: action('handleChange'),
    handleBlur: action('handleBlur'),
    showPassword: false,
    type: 'password',
    label: 'modal.resetPassword.password',
    helperText: 'modal.resetPassword.required',
    error: true,
    clickHandler: action('clickHandler'),
    mouseDownHandler: action('mouseDownHandler'),
  },
};
