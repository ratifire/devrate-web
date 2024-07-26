import { useDispatch } from 'react-redux';
import { setCredentials } from '../../redux/auth/authSlice';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const useAuth = () => {
  const dispatch = useDispatch();
  const cookies = Cookies.get('JSESSIONID');
  
  useEffect(() => {
    dispatch(setCredentials({ isAuthenticated: Boolean(cookies) }));
  }, [cookies, dispatch]);
};

export default useAuth;