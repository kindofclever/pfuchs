import React from 'react';
import { Box, Button } from '@mui/material';
import './App.css';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: `url('../public/images/background.jpg')`, // This path points to public/images/background.jpg
          backgroundSize: 'cover', // Ensure the image covers the entire container
          backgroundPosition: 'center', // Center the background image
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button color='primary'>Green Button</Button>
        <Button color='secondary'>Orange Button</Button>
      </Box>
    </ThemeProvider>
  );
};
