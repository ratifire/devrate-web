import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
import { logOut } from '../../auth/authSlice';
import { useNavigate } from 'react-router-dom';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  credentials: 'include',
});

export const customBaseQuery = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    if (result.error.status === 429) {
      return {
        error: {
          status: result.error.status,
          data: result.error.data || 'Too Many Requests. Please try again later.',
        },
      };
    }
    return {
      error: {
        status: result.error.status,
        data: result.error.data || 'Request error',
      },
    };
  }

  return result;
};

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const result = await customBaseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    api.dispatch(logOut());
    Cookies.remove('JSESSIONID');
    const navigate = useNavigate();
    navigate('/');
    return Promise.reject(result.error);
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});
