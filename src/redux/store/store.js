import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants';

import modalSliceReducer from '../modal/modalSlice';
import modalStepReducer from '../modal/modalStepSlice';
import { apiSlice } from '../services/api/apiSlice';
import { authReducer } from '../auth/authSlice';
import { picturesReducer } from '../user/picturesSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user'],
};

const picturesPersistConfig = {
  key: 'pictures',
  storage,
  whitelist: ['pictures'],
};

const rootReducer = {
  modal: modalSliceReducer,
  modalStep: modalStepReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: persistReducer(authPersistConfig, authReducer),
  pictures: persistReducer(picturesPersistConfig, picturesReducer),
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(logger)
      .concat(apiSlice.middleware),
  devTools: true,
});

const persistor = persistStore(store);

export { store, persistor };
