import { lazy, memo, Suspense } from 'react';

const SettingsNotifications = lazy(() =>
  import('@components/PageComponents/SettingsComponents/index.js').then((module) => ({
    default: module.SettingsNotifications,
  }))
);

const MemoizedSettingsNotifications = memo(SettingsNotifications);

const NotificationsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MemoizedSettingsNotifications />
    </Suspense>
  );
};

export default NotificationsPage;
