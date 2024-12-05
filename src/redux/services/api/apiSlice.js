import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TAG_TYPES_ARRAY } from '../../../utils/constants/tagTypes';
import { setCredentials } from '../../auth/authSlice';
import { PUBLIC_ENDPOINTS_ARRAY } from '../../../utils/constants/publicEndpoints';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState, endpoint }) => {
    if (!PUBLIC_ENDPOINTS_ARRAY.includes(endpoint)) {
      const { authToken, idToken } = getState().auth.user.data;

      if (authToken && idToken) {
        headers.set('Authorization', authToken);
        headers.set('Id-Token', idToken);
      }
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
      if (refreshToken.meta) {
        const headers = refreshToken?.meta?.response?.headers;

        if (headers) {
          const authToken = headers.get('authorization');
          const idToken = headers.get('id-token');

          if (authToken && idToken) {
            api.dispatch(
              setCredentials({
                authToken,
                idToken,
              })
            );
            return baseQuery(args, api, extraOptions);
          }
        }
      }
    } catch (error) {
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
