import ButtonDef from './ButtonDef';

export default {
  title: 'Example/ButtonDef',
  component: ButtonDef,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: 'contained',
    type: 'submit',
    disabled: false,
  },
};
export const Default = {
  args: {
    label: 'Button',
  },
};
