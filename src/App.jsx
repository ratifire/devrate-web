import React from 'react';

import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import 'react-toastify/dist/ReactToastify.css';


export function App() {
  return <RouterProvider router={router} />;
}
