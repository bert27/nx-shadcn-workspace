import { AppRouteInterface, IconSideNavBar, SideNavBar } from '@shared';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppPrimaryModule = React.lazy(() => import('@appPrimary'));
const AppSecondaryModule = React.lazy(() => import('@appSecondary'));

const appRoutes: AppRouteInterface[] = [
  {
    name: 'Characters',
    icon: <IconSideNavBar emoji="🤖" label="robot" />,
    path: '/',
    element: <AppPrimaryModule />,
  },
  {
    name: 'Other',
    icon: <IconSideNavBar emoji="😎" label="cool" />,
    path: '/otra-app',
    element: <AppSecondaryModule />,
  },
];

export function App() {
  return (
    <Router>
      <div style={{ display: 'flex', width: '100%', minHeight: '100vh' }}>
        <SideNavBar routes={appRoutes} />
        <Suspense fallback={<div style={{ padding: 20 }}>Cargando módulo...</div>}>
          <Routes>
            {appRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
