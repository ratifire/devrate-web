import FormCheckbox from './FormCheckbox';

export default {
  title: 'Form/CheckBox/FormCheckbox',
  component: FormCheckbox,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: {
    checked: false,
    name: '',
    label: 'modal.registration.news_letter',
    helperText: '',
    error: false,
  },
};
export const Checked = {
  args: {
    checked: true,
    name: '',
    label: 'modal.registration.news_letter',
    helperText: '',
    error: false,
  },
};
export const Error = {
  args: {
    checked: false,
    name: '',
    label: 'modal.registration.news_letter',
    helperText: 'modal.registration.agreement_error',
    error: true,
  },
};
