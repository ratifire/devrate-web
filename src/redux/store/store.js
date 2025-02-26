// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import session from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants';
import modalSliceReducer from '../modal/modalSlice';
import modalStepReducer from '../modal/modalStepSlice';
import chatSliceReducer from '../chat/chatSlice';
import { apiSlice } from '../services/api/apiSlice';
import { authReducer } from '../auth/authSlice';
import tokenSlice from '../auth/tokenSlice';
import specializationSliceReducer from '../specialization/specializationSlice';
import emailSliceReducer from '../../redux/auth/emailSlice';
import activeMasteryReducer from '../specialization/activeMasterySlice';
import buttonReducer from '../addButton/addButtonSlice';
import themeSliceReducer from '../theme/themeSlice';
import updateTabSlice from '../updateTab/updateTabSlice';

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

export const rootReducer = {
  chat: chatSliceReducer,
  modal: persistReducer(modalPersistConfig, modalSliceReducer),
  modalStep: modalStepReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  specialization: specializationSliceReducer,
  email: emailSliceReducer,
  activeMastery: activeMasteryReducer,
  button: buttonReducer,
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
