import { store } from '../../redux/store/store';
import { redirect } from 'react-router-dom';

/**
 *
 * @returns {Response|boolean} A redirect to the /signup page will appear if the user is not logged in. If the user is
 * logged in, true is returned and the user is taken to the profile page
 */
export default () => {
  const token = store.getState().auth.token;
  if (!token) {
    return redirect('/signup');
  }
  return true;
};
