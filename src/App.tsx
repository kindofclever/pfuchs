import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Theme from './Theme';
import LandingPage from './containers/Landing/LandingPage';
import { Home } from './containers/Home/Home';
import ElevatorSimulation from './containers/Elevators/ElevatorSimulation';
import About from './containers/About/About';
import Colours from './containers/Colours/Colours';
import AppLayout from './layout/AppLayout';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<LandingPage />}
          />
          <Route
            path='/*'
            element={
              <AppLayout>
                <Routes>
                  <Route
                    path='/home'
                    element={<Home />}
                  />
                  <Route
                    path='/about'
                    element={<About />}
                  />
                  <Route
                    path='/elevators'
                    element={<ElevatorSimulation />}
                  />
                  <Route
                    path='/colours'
                    element={<Colours />}
                  />
                </Routes>
              </AppLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
