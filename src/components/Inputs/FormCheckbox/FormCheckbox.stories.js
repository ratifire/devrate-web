import FormCheckbox from './FormCheckbox';

export default {
  title: 'Example/FormCheckbox',
  component: FormCheckbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};
export const Default = {
  args: {
    checked: false,
    name: '',
    label: 'Надсилати мені новини, опитування та спіціальні пропозиції від DEVERATE',
    helperText: '',
    error: false,
  },
};
export const Error = {
  args: {
    checked: false,
    name: '',
    label: 'Надсилати мені новини, опитування та спіціальні пропозиції від DEVERATE',
    helperText: 'Для використання нашого сервісу вам необхідно погодитися з умовами користування',
    error: true,
  },
};
