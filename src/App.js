import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './services/PrivateRoute';
import {
  AUTH_ROUTE,
  HOME_ROUTE,
  CREATE_ROUTE,
  PREVIEW_ROUTE,
  STATIC_ROUTE,
} from './utils/constants/routes.constants';
import AuthPage from './pages/Auth/AuthPage';
import HomePage from './pages/Home/Home';
import CreateContract from './pages/Create/CreateContract';
import Preview from './pages/Preview/Preview';
import Static from './pages/Static/TermsOfService';

function App() {
  useEffect(() => {
    const handleScreenshot = () => {
      console.log('Скриншот сделан!');
    };

    const handleKeyDown = (event) => {
      if (event.key === 'PrintScreen') {
        event.preventDefault();
        handleScreenshot();
      }
    };

    const handleContextMenu = (event) => {
      event.preventDefault();
      handleScreenshot();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <Routes>
      <Route path={AUTH_ROUTE} element={<AuthPage />} />
      <Route path={HOME_ROUTE} element={<PrivateRoute component={HomePage} />} />
      <Route path={CREATE_ROUTE} element={<PrivateRoute component={CreateContract} />} />
      <Route path={PREVIEW_ROUTE} element={<PrivateRoute component={Preview} />} />
      <Route path={STATIC_ROUTE} element={<Static />} />
    </Routes>
  );
}

export default App;
