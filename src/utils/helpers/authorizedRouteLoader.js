import { store } from '../../redux/store/store';
import { useHistory } from 'react-router-dom';

const authorizedRouteLoader = async () => {
  const history = useHistory();
  const token = store.getState().auth.token;

  if (!token) {
    history.push('/');
    return false;
  }

  return true;
};

export default authorizedRouteLoader;
