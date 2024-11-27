import { action } from '@storybook/addon-actions';
import ButtonDef from './ButtonDef';

export default {
  title: 'Form/Button/ButtonDef',
  component: ButtonDef,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: 'contained',
    type: 'button',
  },
};

export const Contained = {
  args: {
    variant: 'contained',
    label: 'modal.registration.btn_register',
    correctStyle: {},
    handlerClick: action('clickHandler'),
    startIcon: null,
    endIcon: null,
  },
};
export const ContainedDisabled = {
  args: {
    variant: 'contained',
    label: 'modal.registration.btn_register',
    correctStyle: {},
    handlerClick: action('clickHandler'),
    disabled: true,
    startIcon: null,
    endIcon: null,
  },
};
export const Outlined = {
  args: {
    variant: 'contained',
    label: 'modal.registration.btn_register',
    correctStyle: {},
    handlerClick: action('clickHandler'),
    startIcon: null,
    endIcon: null,
  },
};
export const OutlinedDisabled = {
  args: {
    variant: 'outlined',
    label: 'modal.registration.btn_register',
    correctStyle: {},
    handlerClick: action('clickHandler'),
    disabled: true,
    startIcon: null,
    endIcon: null,
  },
};
export const Text = {
  args: {
    variant: 'text',
    label: 'modal.registration.btn_register',
    correctStyle: {},
    handlerClick: action('clickHandler'),
    startIcon: null,
    endIcon: null,
  },
};
export const TextDisabled = {
  args: {
    variant: 'text',
    label: 'modal.registration.btn_register',
    correctStyle: {},
    handlerClick: action('clickHandler'),
    disabled: true,
    startIcon: null,
    endIcon: null,
  },
};
