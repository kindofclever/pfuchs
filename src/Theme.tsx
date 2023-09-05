import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      light: '#E040FB',
      main: '#AA00FF',
      dark: '#8E00CE',
      contrastText: '#fff',
    },
    secondary: {
      light: '#40C4FF',
      main: '#00B0FF',
      dark: '#0081CB',
      contrastText: '#fff',
    },
    error: {
      light: '#FF77A9',
      main: '#FF4081',
      dark: '#FF1B63',
      contrastText: '#fff',
    },
    success: {
      light: '#69F0AE',
      main: '#00E676',
      dark: '#00B74D',
      contrastText: '#fff',
    },
    warning: {
      light: '#FFD740',
      main: '#FFC400',
      dark: '#FFAB00',
      contrastText: '#fff',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.7rem',
      fontWeight: 900,
      color: 'white',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },

    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      color: 'white',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },

    h3: {
      fontSize: '1.7rem',
      fontWeight: 700,
      color: 'white',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },

    h4: {
      fontSize: '1.4rem',
      fontWeight: 700,
      color: 'white',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },

    h5: {
      fontSize: '1.2rem',
      fontWeight: 700,
      color: 'white',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },

    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      color: 'white',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    button: {
      fontFamily: 'inherit',
      fontSize: '1rem',
      fontWeight: 600,
      color: '#1945B4',
      lineHeight: '19px',
      textTransform: 'none',
    },
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
          borderRadius: 4,
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
