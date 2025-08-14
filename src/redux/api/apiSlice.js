import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut } from '@redux/slices/auth/authSlice.js';
import { clearTokens, setTokens } from '@redux/slices/auth/tokenSlice.js';
import { TAG_TYPES_ARRAY } from '@utils/constants/tagTypes.js';
import { PUBLIC_ENDPOINTS_ARRAY } from '@utils/constants/publicEndpoints.js';
import { getTokenInHeaders } from '@utils/helpers/index.js';
import { closeModal } from '@redux/slices/modal/modalSlice.js';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_DEV_URL || import.meta.env.VITE_API_URL,
  prepareHeaders: (headers, { getState, endpoint }) => {
    if (PUBLIC_ENDPOINTS_ARRAY.includes(endpoint)) return;

    const { authToken, idToken } = getState().tokens;

    if (authToken && idToken) {
      headers.set('Authorization', authToken);
      headers.set('Id-Token', idToken);
    }
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const currentUrl = window.location.pathname + window.location.search;
  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    api.dispatch(logOut({ returnUrl: currentUrl }));
    api.dispatch(clearTokens());
    api.dispatch(closeModal());
    return result;
  }

  if (result.error && result.error.status === 498) {
    try {
      const refreshToken = await baseQuery(
        {
          url: '/auth/refresh-token',
          method: 'POST',
          credentials: 'include',
        },
        api,
        extraOptions
      );

      if (refreshToken.error && refreshToken.error.status === 497) {
        api.dispatch(logOut({ returnUrl: currentUrl }));
        api.dispatch(clearTokens());
        api.dispatch(closeModal());
        return result;
      }

      if (refreshToken.meta) {
        const headers = refreshToken?.meta?.response?.headers;

        if (headers) {
          const { authToken, idToken } = getTokenInHeaders({ headers });

          if (authToken && idToken) {
            api.dispatch(setTokens({ idToken, authToken }));
            return baseQuery(args, api, extraOptions);
          }
        }
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      api.dispatch(logOut({ returnUrl: currentUrl }));
      api.dispatch(clearTokens());
      api.dispatch(closeModal());
      return result;
    }
  }

  return result;
};

export const apiSlice = createApi({
  tagTypes: TAG_TYPES_ARRAY,
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
