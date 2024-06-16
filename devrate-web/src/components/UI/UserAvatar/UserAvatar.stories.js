import { decorators } from '../../../../.storybook/preview';
import UserAvatar from './UserAvatar';

export default {
  title: 'UI/UserAvatar',
  component: UserAvatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: decorators,
};

export const Sm = {
  args: {
    userName: 'Олена Бондаренко',
    size: 'sm',
  },
};
export const L = {
  args: {
    userName: 'Владислав Дикий',
    size: 'l',
  },
};
