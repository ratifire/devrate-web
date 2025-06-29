import { RouterProvider } from 'react-router/dom';
import router from './router/router.jsx';

export function App() {
  // console.log('App component rendered');
  return <RouterProvider router={router} />;
}
