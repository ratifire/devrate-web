import Logo from './Logo';

export default {
  title: 'Example/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      description: 'logo width',
    },
    height: {
      description: 'logo height',
    },
  },
};
export const Default = {};
