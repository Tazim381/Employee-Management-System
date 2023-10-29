import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';


import HomePage from '../pages/Homepage';
import AboutPage from '../pages/AboutPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import { SecureRoute } from './SecureRoute';
import AddEmployee from '../pages/AddEmployee';
import Employees from '../pages/Employees';

const secureRouteWrapper = (element) => <SecureRoute>{element}</SecureRoute>;

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
        {
          path: 'dashboard',
          element:secureRouteWrapper(<Dashboard/>),
      },
      {
        path: 'employees',
        element:(<Employees/>),
    },
      {
        path: 'addemployee',
        element:(<AddEmployee/>),
    },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
