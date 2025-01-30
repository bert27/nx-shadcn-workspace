import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const AppSecondaryModule = React.lazy(() => import('@appSecondary'));

export function App() {
  return (
    <div>
      <h1 className="bienvenido-shell">Bienvenido a la Shell</h1>
      <Router>
        <Suspense fallback={<div>Cargando...</div>}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home usando appSecondary</Link>
              </li>
              <li>
                <Link to="/otra-app">Otra en construcción</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<AppSecondaryModule />} />
            <Route path="/otra-app" element={<div>Continuara</div>} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
