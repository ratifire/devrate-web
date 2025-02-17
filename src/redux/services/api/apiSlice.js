import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut } from '../../auth/authSlice';
import { TAG_TYPES_ARRAY } from '../../../utils/constants/tagTypes';
import { PUBLIC_ENDPOINTS_ARRAY } from '../../../utils/constants/publicEndpoints';
import { clearTokens, setTokens } from '../../auth/tokenSlice';
import { getTokenInHeaders } from '../../../utils/helpers';

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
  const result = await baseQuery(args, api, extraOptions);

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
        api.dispatch(logOut());
        api.dispatch(clearTokens());
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
      api.dispatch(logOut());
      api.dispatch(clearTokens());
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
