import React from 'react';
import PasswordVisibilityToggle from './PasswordVisibilityToggle';
import { Stack } from '@mui/material';

export default {
  title: 'Example/PasswordVisibilityToggle',
  component: PasswordVisibilityToggle,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => (
  <Stack direction='row' spacing={1} alignItems='center'>
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
