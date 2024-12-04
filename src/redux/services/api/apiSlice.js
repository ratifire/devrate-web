import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TAG_TYPES_ARRAY } from '../../../utils/constants/tagTypes';
import { setCredentials } from '../../auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState, endpoint }) => {
    const ignoreEndpoints = [
      'createUser',
      'confirmEmail',
      'login',
      'resetPassword',
      'changePassword',
      'getCountryList',
    ];

    if (!ignoreEndpoints.includes(endpoint)) {
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
        },
        api,
        extraOptions
      );

      if (refreshToken.meta) {
        const headers = refreshToken?.meta?.response?.headers;

        if (headers) {
          const authToken = headers.get('authorization');
          const idToken = headers.get('id-token');
          api.dispatch(
            setCredentials({
              authToken,
              idToken,
            })
          );
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
