import { Suspense, lazy } from 'react';

import Loading from './Loading';

const Root = () => {
  const Users = lazy(() => import('./Users'));

  return (
    <Suspense fallback={<Loading />}>
      <Users />
    </Suspense>
  );
};

export default Root;
