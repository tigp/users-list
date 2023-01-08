/*
eslint object-curly-newline: ["error", { "ObjectExpression": "always", "ObjectPattern": "never" }]
*/

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './components/ErrorPage';
import Users from './components/Users';
import UserInfo from './components/Bio';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Users />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/user',
      element: <UserInfo />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
