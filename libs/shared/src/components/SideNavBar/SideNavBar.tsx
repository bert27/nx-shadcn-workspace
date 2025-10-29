import React from 'react';
import { Link } from 'react-router-dom';

export interface AppRouteInterface {
  name: string;
  path: string;
  icon: React.ReactNode;
  element: React.ReactElement;
}

interface SideNavBarProps {
  routes: AppRouteInterface[];
}

export const SideNavBar = ({ routes }: SideNavBarProps): React.ReactElement => {
  return (
    <div
      className="side-nav-bar"
      style={{
        background: '#05002C',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {routes.map((route) => (
        <div key={route.name} style={{ padding: '0.5rem 0' }}>
          <Link to={route.path} aria-label={route.name} title={route.name}>
            {route.icon}
          </Link>
        </div>
      ))}
    </div>
  );
};
