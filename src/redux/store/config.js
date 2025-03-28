// src/app/config.js

import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import session from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants';
import buttonReducer from '@redux/slices/addButton/addButtonSlice.js';
import { authReducer } from '@redux/slices/auth/authSlice.js';
import emailSliceReducer from '@redux/slices/auth/emailSlice.js';
import tokenSlice from '@redux/slices/auth/tokenSlice.js';
import chatSliceReducer from '@redux/slices/chat/chatSlice.js';
import specializationSliceReducer from '@redux/slices/specialization/specializationSlice.js';
import activeMasteryReducer from '@redux/slices/specialization/activeMasterySlice.js';
import themeSliceReducer from '@redux/slices/theme/themeSlice';
import updateTabSlice from '@redux/slices/updateTab/updateTabSlice';
import modalSliceReducer from '@redux/slices/modal/modalSlice';
import modalStepReducer from '@redux/slices/modal/modalStepSlice';
import scheduleReducer from '@redux/slices/schedule/scheduleSlice';
import { apiSlice } from '@redux/api/apiSlice.js';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user'],
};

const tokenPersistConfig = {
  key: 'tokens',
  storage,
  whitelist: ['idToken', 'authToken', 'isAuth'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
  whitelist: ['mode'],
};

const modalPersistConfig = {
  key: 'modal',
  storage: session,
  whitelist: ['data', 'isOpen', 'modalType'],
};

const rootReducer = {
  chat: chatSliceReducer,
  modal: persistReducer(modalPersistConfig, modalSliceReducer),
  modalStep: modalStepReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  specialization: specializationSliceReducer,
  email: emailSliceReducer,
  activeMastery: activeMasteryReducer,
  button: buttonReducer,
  schedule: scheduleReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  tokens: persistReducer(tokenPersistConfig, tokenSlice),
  theme: persistReducer(themePersistConfig, themeSliceReducer),
  skills: updateTabSlice,
};

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
  devTools: true,
});

const persistor = persistStore(store);

export { store, persistor };
