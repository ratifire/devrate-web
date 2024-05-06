import { ReactComponent as Profile } from '../../../assets/icons/person_filled.svg';
import { ReactComponent as Schedule } from '../../../assets/icons/calendar_filled.svg';
import { ReactComponent as Specializations } from '../../../assets/icons/school_filled.svg';
import { ReactComponent as Interviews } from '../../../assets/icons/videocamera.svg';
import { ReactComponent as Settings } from '../../../assets/icons/settings_filled.svg';
import { ReactComponent as Bookmark } from '../../../assets/icons/bookmark.svg';
import { ReactComponent as Logout } from '../../../assets/icons/logout_filled.svg';

import links from '../../../utils/links/links';

export default [
  {
    name: 'profile',
    path: links.profile,
    icon: Profile,
    target: '_blank',
  },
  {
    name: 'schedule',
    path: links.schedule,
    icon: Schedule,
    target: '_blank',
  },
  {
    name: 'specializations',
    path: links.specializations,
    icon: Specializations,
    target: '_blank',
  },
  {
    name: 'interviews',
    path: links.interviews,
    icon: Interviews,
    target: '_blank',
  },
  {
    name: 'settings',
    path: links.settings,
    icon: Settings,
    target: '_blank',
  },
  {
    name: 'bookmark',
    path: links.bookmark,
    icon: Bookmark,
    target: '_blank',
  },
  {
    name: 'logout',
    path: links.home,
    icon: Logout,
    target: '_blank',
  },
]