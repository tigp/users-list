import { Suspense, lazy } from 'react';

import Loading from './loading-page/Loading';

const Root = () => {
  const Users = lazy(() => import('./users-page/Users'));

  return (
    <Suspense fallback={<Loading />}>
      <Users />
    </Suspense>
  );
};

export default Root;
