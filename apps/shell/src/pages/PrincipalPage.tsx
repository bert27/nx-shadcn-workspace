import { AppRouteInterface, IconSideNavBar, SideNavBar } from '@shared';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppSecondaryModule = React.lazy(() => import('@appSecondary'));

const appRoutes: AppRouteInterface[] = [
  {
    name: 'Characters',
    icon: <IconSideNavBar emoji="🤖" label="robot" />,
    path: '/',
    element: <AppSecondaryModule />,
  },
  {
    name: 'Other',
    icon: <IconSideNavBar emoji="😎" label="cool" />,
    path: '/otra-app',
    element: <div>Continuará</div>,
  },
];

export function App() {
  return (
    <Router>
      <div style={{ display: 'flex', width: '100%', minHeight: '100vh' }}>
        <SideNavBar routes={appRoutes} />
        <Routes>
          {appRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
