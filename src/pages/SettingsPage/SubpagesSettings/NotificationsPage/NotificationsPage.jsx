import { lazy, memo, Suspense } from 'react';
import { Box } from '@mui/material';
import {
  TitleSettingSkeleton,
  EmailNotificationsSkeleton,
  TelegramNotificationsSkeleton,
} from '@components/UI/Skeleton';
import { styles } from '@pages/SettingsPage/SubpagesSettings/SubpagesSettingsPages.styles';

const EmailNotifications = lazy(() =>
  import('@components/PageComponents/SettingsComponents/index.js').then((module) => ({
    default: module.EmailNotifications,
  }))
);

const TitleNotifications = lazy(() =>
  import('@components/PageComponents/SettingsComponents/index.js').then((module) => ({
    default: module.TitleNotifications,
  }))
);

const TelegramNotifications = lazy(() =>
  import('@components/PageComponents/SettingsComponents/index.js').then((module) => ({
    default: module.TelegramNotifications,
  }))
);

const MemoizedTitleNotifications = memo(TitleNotifications);
const MemoizedEmailNotifications = memo(EmailNotifications);
const MemoizedTelegramNotifications = memo(TelegramNotifications);

const NotificationsPage = () => {
  return (
    <Box sx={styles.wrapper}>
      <Suspense fallback={<TitleSettingSkeleton />}>
        <MemoizedTitleNotifications />
      </Suspense>
      <Box sx={styles.section}>
        <Suspense fallback={<EmailNotificationsSkeleton />}>
          <MemoizedEmailNotifications />
        </Suspense>
      </Box>
      <Box sx={styles.section}>
        <Suspense fallback={<TelegramNotificationsSkeleton />}>
          <MemoizedTelegramNotifications />
        </Suspense>
      </Box>
    </Box>
  );
};

export default NotificationsPage;
