import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import SettingsIcon from '@mui/icons-material/Settings';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LogoutIcon from '@mui/icons-material/Logout';

import links from '../../../utils/links/links';

export default [
  {
    name: 'profile',
    path: links.profile,
    icon: PersonIcon,
    target: '_blank',
  },
  {
    name: 'schedule',
    path: links.schedule,
    icon: CalendarTodayIcon,
    target: '_blank',
  },
  {
    name: 'specializations',
    path: links.specializations,
    icon: SchoolIcon,
    target: '_blank',
  },
  {
    name: 'interviews',
    path: links.interviews,
    icon: VideoCameraFrontIcon,
    target: '_blank',
  },
  {
    name: 'settings',
    path: links.settings,
    icon: SettingsIcon,
    target: '_blank',
  },
  {
    name: 'bookmark',
    path: links.bookmark,
    icon: BookmarkIcon,
    target: '_blank',
  },
  {
    name: 'logout',
    path: links.home,
    icon: LogoutIcon,
    target: '_blank',
  },
]