import React from 'react';
import { Stack } from '@mui/material';
import PasswordVisibilityToggle from './PasswordVisibilityToggle';

export default {
  title: 'Example/PasswordVisibilityToggle',
  component: PasswordVisibilityToggle,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => (
  <Stack alignItems='center' direction='row' spacing={1}>
    <PasswordVisibilityToggle {...args} />
  </Stack>
);

export const Default = Template.bind({});
Default.args = {
  name: 'password',
  showPassword: false,
  clickHandler: () => {},
  mouseDownHandler: () => {},
  tooltip: true,
  textContent: 'Your password will be visible',
};
