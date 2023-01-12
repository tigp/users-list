import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';

import { fetchUsers } from './redux/usersSlice';
import { useAppDispatch } from './redux/hooks';
import ErrorPage from './components/ErrorPage';
import Root from './components/Root';
import UserDetails from './components/UserDetails';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/user/:userId',
      element: <UserDetails />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
