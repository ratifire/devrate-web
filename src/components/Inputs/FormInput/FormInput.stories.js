import React from 'react';
import { action } from '@storybook/addon-actions';
import FormInput from './FormInput';
import { decorators } from '../../../../.storybook/preview';

export default {
  title: 'Example/FormInput',
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

const Template = (args) => <FormInput {...args} />;
export const EmailInput = Template.bind({});
EmailInput.args = {
  name: 'email',
  value: '',
  handleChange: action('handleChange'),
  handleBlur: action('handleBlur'),
  showPassword: false,
  type: 'email',
  label: 'Email',
  helperText: 'Please enter your email',
  error: false,
  clickHandler: action('clickHandler'),
  mouseDownHandler: action('mouseDownHandler'),
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  name: 'password',
  value: '',
  handleChange: action('handleChange'),
  handleBlur: action('handleBlur'),
  showPassword: false,
  type: 'password',
  label: 'Password',
  helperText: 'Please enter your password',
  error: false,
  clickHandler: action('clickHandler'),
  mouseDownHandler: action('mouseDownHandler'),
};
