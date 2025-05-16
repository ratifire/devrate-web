import { memo, useEffect } from 'react';
import { Outlet } from 'react-router';
import ProfileHeader from '@components/PageComponents/ProfileHeader';
import ModalComponent from '@components/ModalsComponents/ModalComponent.jsx';
import ChatForm from '@components/PageComponents/Chat/ChatForm/index.js';
import { requestNotificationPermission, subscribeToPush } from '@utils/serviceWorker/notifications.js';
import { registerServiceWorker } from '@utils/serviceWorker/registerServiceWorker.js';
import { enqueueSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { store } from '@redux/store/config.js';

const MemoizedProfileHeader = memo(ProfileHeader);

const RootPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const startPushService = async () => {
      try {
        const registration = await registerServiceWorker();
        if (registration) {
          const permission = await requestNotificationPermission();
          if (permission === 'granted') {
            await subscribeToPush(store);
          }
        }
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        enqueueSnackbar(t('notification.error'), { variant: 'error' });
      }
    };

    startPushService();
  }, []); //runs once on mount only

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
