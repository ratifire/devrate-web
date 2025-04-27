import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useOAuthAuthorizeMutation } from '@redux/api/slices/auth/authApiSlice.js';
import { useEffect } from 'react';
import { setCredentials } from '@redux/slices/auth/authSlice.js';
import { setTokens } from '@redux/slices/auth/tokenSlice.js';

const OAuth = ({ children }) => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const state = params.get('state');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [authorization] = useOAuthAuthorizeMutation();

  useEffect(() => {
    if (!code || !state) return;

    const { userData, idToken, authToken } = authorization({ code, state }).unwrap();
    dispatch(setCredentials({ data: userData }));

    if (idToken && authToken) {
      dispatch(setTokens({ idToken, authToken }));
      navigate('/profile', { replace: true });
    }
  }, [code, state]);

  return children;
};

export default OAuth;
