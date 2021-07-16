import React from 'react';

const routes = [
  {
    path: '/',
    exact: true,
    component: React.lazy(() => import('../pages/LandingPage')),
  },
];

export default routes;
