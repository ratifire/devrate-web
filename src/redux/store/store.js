import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { devrateServiceApi } from '../services/authAPI';

import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

import modalSliceReducer from '../auth/modalSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'token', 'user', 'isLoggedIn'],
};
const authReducer = () => [];

export const store = configureStore({
  reducer: {
    modal: modalSliceReducer,
    [devrateServiceApi.reducerPath]: devrateServiceApi.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          devrateServiceApi.util.updateQueryResultType,
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }).concat(logger),
  // devTools: process.env.NODE_ENV === 'development', //Only for development mode
});

export const persistor = persistStore(store);
