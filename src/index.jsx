import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './assets/fonts/fonts.css';
import { persistor, store } from './redux/store/config.js';
import './utils/i18n';
import ThemedApp from './utils/theme/ThemedApp.jsx';

const rootDom = document.getElementById('root');
const root = ReactDOM.createRoot(rootDom);

root.render(
  <Suspense fallback='loading'>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemedApp />
      </PersistGate>
    </Provider>
  </Suspense>
);
