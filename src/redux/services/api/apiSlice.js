import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
import { logOut } from '../../auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  credentials: 'include',
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    api.dispatch(logOut());
    Cookies.remove('JSESSIONID');
    return Promise.reject(result.error);
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});

