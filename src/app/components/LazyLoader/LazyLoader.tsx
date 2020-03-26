import React, { Suspense } from 'react';

const LazyLoader = <P extends object>(Component: React.ComponentType<P>) => (props: any) => (
  <Suspense fallback="">
    <Component {...props} />
  </Suspense>
);

export default LazyLoader;
