import { GlobalProvider } from './context/useGlobalContext';
import PrincipalPage from './pages/PrincipalPage';

export function App() {
  return (
    <GlobalProvider>
      <PrincipalPage />
    </GlobalProvider>
  );
}

export default App;
