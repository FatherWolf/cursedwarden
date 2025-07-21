// src/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import App from './App';
import { theme } from './theme/theme';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find root element');

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
