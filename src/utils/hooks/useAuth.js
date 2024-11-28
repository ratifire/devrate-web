import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { setCredentials } from '../../redux/auth/authSlice';

const useAuth = () => {
  const dispatch = useDispatch();
  const cookies = Cookies.get('JSESSIONID');

  useEffect(() => {
    dispatch(setCredentials({ isAuthenticated: Boolean(cookies) }));
  }, [cookies, dispatch]);
};

export default useAuth;
