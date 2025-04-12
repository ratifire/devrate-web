import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useOAuthAuthorizeMutation } from '@redux/api/slices/auth/authApiSlice.js';
import { useEffect } from 'react';
import { setCredentials } from '@redux/slices/auth/authSlice.js';
import { setTokens } from '@redux/slices/auth/tokenSlice.js';

const withAuth = (Component) => {
  return function AuthComponent(props) {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const state = params.get('state');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [authorization] = useOAuthAuthorizeMutation();

    useEffect(() => {
      if (!code || !state) return;

      const submit = async () => {
        try {
          const { userData, idToken, authToken } = await authorization({ code, state }).unwrap();

          if (userData) {
            dispatch(setCredentials({ data: userData }));
          }

          if (idToken && authToken) {
            dispatch(setTokens({ idToken, authToken }));
            navigate('/profile', { replace: true });
          }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Authorization failed:', error);
        }
      };

      submit();
    }, [code, state]);

    return <Component {...props} />;
  };
};

export default withAuth;
