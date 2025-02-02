import { GlobalProvider } from '@shared';
import PrincipalPage from './pages/PrincipalPage';

export function App() {
  return (
    <GlobalProvider>
      <PrincipalPage />
    </GlobalProvider>
  );
}

export default App;
