import FormSelect from './FormSelect';
import { decorators } from '../../../../.storybook/preview';
import { action } from '@storybook/addon-actions';
import { userCountries } from '../../../utils/constants/userCountries';

export default {
  title: 'Form/Select/FormSelect',
  component: FormSelect,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    helperText: '',
    error: false,
  },
  decorators: decorators,
};
export const Outlined = {
  args: {
    variant: 'outlined',
    name: 'country',
    value: '',
    label: 'modal.registration.country',
    helperText: '',
    error: false,
    itemsText: 'modal.registration.countries',
    handleChange: action('changeHandler'),
    handleBlur: action('handleBlur'),
    countries: userCountries,
  },
};
export const OutlinedError = {
  args: {
    variant: 'outlined',
    name: 'country',
    value: '',
    label: 'modal.registration.country',
    helperText: 'modal.registration.required',
    error: true,
    itemsText: 'modal.registration.countries',
    handleChange: action('changeHandler'),
    handleBlur: action('handleBlur'),
    countries: userCountries,
  },
};
export const Standard = {
  args: {
    variant: 'standard',
    name: 'country',
    value: '',
    label: 'modal.registration.country',
    helperText: '',
    error: false,
    itemsText: 'modal.registration.countries',
    handleChange: action('changeHandler'),
    handleBlur: action('handleBlur'),
    countries: userCountries,
  },
};
export const StandardError = {
  args: {
    variant: 'standard',
    name: 'country',
    value: '',
    label: 'modal.registration.country',
    helperText: 'modal.registration.required',
    error: true,
    itemsText: 'modal.registration.countries',
    handleChange: action('changeHandler'),
    handleBlur: action('handleBlur'),
    countries: userCountries,
  },
};
export const Filled = {
  args: {
    variant: 'filled',
    name: 'country',
    value: '',
    label: 'modal.registration.country',
    helperText: '',
    error: false,
    itemsText: 'modal.registration.countries',
    handleChange: action('changeHandler'),
    handleBlur: action('handleBlur'),
    countries: userCountries,
  },
};
export const FilledError = {
  args: {
    variant: 'filled',
    name: 'country',
    value: '',
    label: 'modal.registration.country',
    helperText: 'modal.registration.required',
    error: true,
    itemsText: 'modal.registration.countries',
    handleChange: action('changeHandler'),
    handleBlur: action('handleBlur'),
    countries: userCountries,
  },
};
