import { combineReducers } from '@reduxjs/toolkit';
import { rootReducer } from './store';

const appReducer = combineReducers(rootReducer);

const rootReducerWithReset = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducerWithReset;
