// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    primaryDark: Palette['primary'];
  }
  interface PaletteOptions {
    primaryDark?: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#094d92', // deep blue
      light: '#68b684', // mid green
      dark: '#1c1018', // almost black
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#c3f73a', // bright lime
      light: '#95e06c', // softer green
      dark: '#68b684', // mid green
      contrastText: '#000000',
    },
    // you can reference extra palette colors as custom keys:
    primaryDark: {
      main: '#1c1018',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#1c1018',
      secondary: '#094d92',
    },
  },
  typography: {
    fontFamily: ['"Roboto"', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(
      ','
    ),
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    body1: { fontSize: '1rem' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
        containedPrimary: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          },
        },
      },
    },
  },
});
