import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#13426B',
    },
    secondary: {
      main: '#FF9800',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#1e293b',
      secondary: '#475569',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3b82f6', // Bright blue for buttons
    },
    background: {
      default: '#0f172a', // Dark blue-black background
      paper: '#1e293b',   // Lighter dark blue for cards
    },
    text: {
      primary: '#f8fafc',   // Light gray/white text
      secondary: '#94a3b8', // Muted gray for secondary text
    },
    success: {
      main: '#22c55e', // Green for holidays
    },
    error: {
      main: '#ef4444', // Red for errors
    },
    warning: {
      main: '#f97316', // Orange for warnings
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

export { lightTheme, darkTheme };
