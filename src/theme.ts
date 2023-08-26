import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#80e27e',  // light shade of green
      main: '#4CAF50',   // main shade of green
      dark: '#087f23',   // dark shade of green
      contrastText: '#fff',  // text color that will contrast with the primary color
    },
    secondary: {
      light: '#ffb74d',  // light shade of orange
      main: '#FF9800',   // main shade of orange
      dark: '#c66900',   // dark shade of orange
      contrastText: '#fff',  // text color that will contrast with the secondary color
    },
    background: {
      default: '#FFE4B5'  // Light orange color, modify as needed
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#4CAF50'  // Green color for h1 tags
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#FF9800'  // Orange color for h2 tags
    },
    // ... you can customize h3, h4, body1, body2, etc.
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,  // rounded corners for all buttons
        },
      },
    },
    // ... you can customize other components in a similar manner
  }
});

export default theme;
