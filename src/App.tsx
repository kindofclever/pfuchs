import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { lightTheme, darkTheme } from './Theme';
import LandingPage from './containers/Landing/LandingPage';
import { Home } from './containers/Home/Home';
import ElevatorSimulation from './containers/Elevators/ElevatorSimulation';
import About from './containers/About/About';
import Colours from './containers/Colours/Colours';
import AppLayout from './layout/AppLayout';
import { LanguageProvider } from './contexts/Language';
import { I18nWrapper } from './contexts/i18n';
import { ThemeContextProvider, useThemeContext } from './contexts/Mode';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <I18nWrapper>
        <ThemeContextProvider>
          <InnerApp />
        </ThemeContextProvider>
      </I18nWrapper>
    </LanguageProvider>
  );
};

const InnerApp: React.FC = () => {
  const { darkMode } = useThemeContext();

  return (
    <MuiThemeProvider theme={darkMode ? darkTheme : lightTheme}>
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
    </MuiThemeProvider>
  );
};
