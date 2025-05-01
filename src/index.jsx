import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { registerServiceWorker } from '@utils/serviceWorker/registerServiceWorker.js';
import { requestNotificationPermission, subscribeToPush } from '@utils/serviceWorker/notifications.js';
import ThemedApp from './utils/theme/ThemedApp.jsx';
import { persistor, store } from './redux/store/config.js';
import './utils/i18n';
import './assets/fonts/fonts.css';

const rootDom = document.getElementById('root');
const root = ReactDOM.createRoot(rootDom);

const startPushService = async () => {
  const registration = await registerServiceWorker();
  if (registration) {
    const permission = await requestNotificationPermission();
    if (permission === 'granted') {
      await subscribeToPush();
    }
  }
};

startPushService();

root.render(
  <Suspense fallback='loading'>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemedApp />
      </PersistGate>
    </Provider>
  </Suspense>
);
