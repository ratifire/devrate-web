import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//Previous version
// const baseQuery = fetchBaseQuery({
//   // eslint-disable-next-line
//   baseUrl: process.env.REACT_APP_API_URL,
//   credentials: 'include',
// });
//
// export const apiSlice = createApi({
//   baseQuery: baseQuery,
//   // eslint-disable-next-line no-unused-vars
//   endpoints: (builder) => ({}),
// });

// New Version
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
    window.location.href = '/';
    return Promise.reject(result.error);
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});

