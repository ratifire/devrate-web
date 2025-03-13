import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import SettingsIcon from '@mui/icons-material/Settings';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LogoutIcon from '@mui/icons-material/Logout';

import links from '../../../router/links';

export default [
  {
    name: 'profile.userMenu.profile',
    path: links.profile,
    icon: PersonIcon,
    target: '_self',
  },
  {
    name: 'profile.userMenu.schedule',
    path: links.schedule,
    icon: CalendarTodayIcon,
    target: '_self',
  },
  {
    name: 'profile.userMenu.specializations',
    path: links.specializations,
    icon: SchoolIcon,
    target: '_self',
  },
  {
    name: 'profile.userMenu.interviews',
    path: links.scheduledInterviews,
    icon: VideoCameraFrontIcon,
    target: '_self',
  },
  {
    name: 'profile.userMenu.settings',
    path: links.settings,
    icon: SettingsIcon,
    target: '_self',
  },
  {
    name: 'profile.userMenu.faq',
    path: links.faq,
    icon: BookmarkIcon,
    target: '_self',
  },
  {
    name: 'profile.userMenu.logout',
    path: links.home,
    icon: LogoutIcon,
    target: '_self',
  },
];
