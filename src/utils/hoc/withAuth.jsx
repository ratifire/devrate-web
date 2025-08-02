import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useOAuthAuthorizeMutation } from '@redux/api/slices/auth/authApiSlice.js';
import { useEffect } from 'react';
import { setCredentials } from '@redux/slices/auth/authSlice.js';
import { setTokens } from '@redux/slices/auth/tokenSlice.js';
import { closeModal } from '@redux/slices/modal/modalSlice.js';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

const withAuth = (Component) => {
  return function AuthComponent(props) {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const state = params.get('state');
    const returnUrl = params.get('returnUrl');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const { t } = useTranslation();
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
            navigate(returnUrl || '/profile', { replace: true });
          }
          // eslint-disable-next-line no-unused-vars
        } catch (err) {
          enqueueSnackbar(t('modal.registration.sso_error'), {
            variant: 'error',
          });
        } finally {
          dispatch(closeModal());
        }
      };

      submit();
    }, [code, state]);

    return <Component {...props} />;
  };
};

export default withAuth;
