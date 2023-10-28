import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';


import HomePage from '../pages/Homepage';
import AboutPage from '../pages/AboutPage';
import Login from '../pages/Login';
import Register from '../pages/Register';

export function AppRoutes() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      children: [
        {
          index: true,
          element: <AboutPage />,
        },
        {
            path: 'login',
            element:<Login/>,
        },
        {
            path: 'register',
            element:<Register/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
