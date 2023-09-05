import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import Theme from './Theme';
import LandingPage from './containers/Landing/LandingPage';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <LandingPage />
    </ThemeProvider>
  );
};
