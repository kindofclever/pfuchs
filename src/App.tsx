import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Theme from './Theme';
import LandingPage from './containers/Landing/LandingPage';
import { Home } from './containers/Home/Home';
import ElevatorSimulation from './containers/Elevators/ElevatorSimulation';
import AppLayout from './layout/AppLayout';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route
              path='/'
              element={<LandingPage />}
            />
            <Route
              path='/home'
              element={<Home />}
            />
            <Route
              path='/elevators'
              element={<ElevatorSimulation />}
            />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
};
