import { store } from '../../redux/store/store';
import { redirect } from 'react-router-dom';

export default () => {
  const token = store.getState().auth.token;
  if (!token) {
    return redirect('/signup');
  }
  return true;
};
