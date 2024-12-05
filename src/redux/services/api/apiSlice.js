import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';
import { logOut } from '../../auth/authSlice';
import { TAG_TYPES_ARRAY } from '../../../utils/constants/tagTypes';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  credentials: 'include',
});
const baseQueryWithReauth = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    api.dispatch(logOut());
    Cookies.remove('JSESSIONID', { path: '/', domain: 'devrate.org' });
    Cookies.remove('JSESSIONID', { path: '/', domain: 'localhost' });
    const navigate = useNavigate();
    navigate('/');
    return Promise.reject(result.error);
  }
  return result;
};
export const apiSlice = createApi({
  tagTypes: TAG_TYPES_ARRAY,
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
