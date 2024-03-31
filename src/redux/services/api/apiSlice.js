import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut, setCredentials } from '../../auth/authSlice';

const baseQuery = fetchBaseQuery({
  // baseUrl: 'https://lms-back-ccq8.onrender.com/api',
  baseUrl: 'http://localhost:8080',

  credentials: 'include',
  // prepareHeaders: (headers, { getState }) => {
  //   const token = getState().auth.token;
  //   console.log('prepareHeaders', token);
  //   if (token) {
  //     headers.set('authorization', `Bearer ${token}`);
  //   }
  //   return headers;
  // },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  // console.log('result', result);
  if (result?.error?.originalStatus === 403) {
    console.log('sending refresh token');
    // send refresh token to get a new access
    const refreshResult = await baseQuery('/refresh', api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      //store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      //retry original queіry with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      console.log('api.dispatch(logOut());');
      api.dispatch(logOut());
    }
  }
  return result;
};
export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});

export const { useCreateUserMutation } = apiSlice;
