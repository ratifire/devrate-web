import { memo, useCallback, useEffect } from 'react';
import { Outlet } from 'react-router';
import ProfileHeader from '@components/PageComponents/ProfileHeader';
import ModalComponent from '@components/ModalsComponents/ModalComponent.jsx';
import ChatForm from '@components/PageComponents/Chat/ChatForm/index.js';
import {
  getCurrentSubscription,
  requestNotificationPermission,
  subscribeToPush,
} from '@utils/serviceWorker/notifications.js';
import { registerServiceWorker } from '@utils/serviceWorker/registerServiceWorker.js';
import { enqueueSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { store } from '@redux/store/config.js';
import serviceWorkerNotificationApiSlice from '@redux/api/slices/serviceWorkerNotification/serviceWorkerNotification.js';

const MemoizedProfileHeader = memo(ProfileHeader);

const RootPage = () => {
  const { t } = useTranslation();

  const monitorNotificationPermission = useCallback(async () => {
    if (!('permissions' in navigator)) return;

    const permissionStatus = await navigator.permissions.query({
      name: 'notifications',
    });

    permissionStatus.onchange = async () => {
      if (permissionStatus.state !== 'granted') {
        // Immediately get subscription before the browser clears it
        const reg = await navigator.serviceWorker.ready;
        const sub = (await reg.pushManager.getSubscription()) || getCurrentSubscription();

        // Force server cleanup with whatever data we have
        await store.dispatch(
          serviceWorkerNotificationApiSlice.endpoints.unsubscribeFromPush.initiate(
            sub || { endpoint: 'permission-revoked' }
          )
        );
      }
    };
  }, []);

  // Initialize service worker and monitoring
  useEffect(() => {
    const initializePushService = async () => {
      try {
        const registration = await registerServiceWorker();
        if (registration) {
          const permission = await requestNotificationPermission();
          if (permission === 'granted') {
            await subscribeToPush(store);
          }
          await monitorNotificationPermission();
        }
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        enqueueSnackbar(t('notification.error'), { variant: 'error' });
      }
    };
    initializePushService();
  }, [monitorNotificationPermission]);

  return (
    <>
      <MemoizedProfileHeader />
      <Outlet />
      <ModalComponent />
      <ChatForm />
    </>
  );
};

export default RootPage;
