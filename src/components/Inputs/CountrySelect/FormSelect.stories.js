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
  argTypes: {},
  decorators: decorators,
};
export const Default = {
  args: {
    variant: 'outlined',
    name: 'country',
    value: '',
    label: 'modal.registration.country',
    helperText: 'This is a required field',
    error: false,
    itemsText: 'modal.registration.countries',
    handleChange: action('changeHandler'),
    handleBlur: action('handleBlur'),
    countries: userCountries,
  },
};
export const Error = {
  args: {
    variant: 'outlined',
    name: 'country',
    value: '',
    label: 'modal.registration.country',
    helperText: 'This is a required field',
    error: true,
    itemsText: 'modal.registration.countries',
    handleChange: action('changeHandler'),
    handleBlur: action('handleBlur'),
    countries: userCountries,
  },
};
