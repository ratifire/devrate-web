import { RouterProvider } from 'react-router/dom';
import { StrictMode } from 'react';
import router from './router/router.jsx';

export function App() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
