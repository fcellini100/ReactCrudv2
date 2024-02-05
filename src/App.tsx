import { Route, Routes, useNavigate } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { Dashboard } from './pages';
import { AppNavbar } from './components/ui';

const App = () => {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </NextUIProvider>
  );
};

export default App;
