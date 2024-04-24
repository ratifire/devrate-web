 import React from 'react';

import { RouterProvider } from 'react-router-dom';
import router from './router/router';
 
export function App() {
  return (
    <ToastLayout> {/* Обернуть весь контент в ToastLayout */}
      <RouterProvider router={router} />
    </ToastLayout>
  );
}
