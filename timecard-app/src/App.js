import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { TimecardProvider } from './contexts/TimecardContext';
import { CssBaseline, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import TimecardPage from './pages/TimecardPage';
import TimecardHistoryPage from './pages/TimecardHistoryPage';
import TimecardDetailsPage from './pages/TimecardDetailsPage';
import ThemeContext from './contexts/ThemeContext';

function App() {
  const { toggleTheme } = React.useContext(ThemeContext);
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Timecard Management
          </Typography>
          <nav>
            <Button color="inherit" component={Link} to="/">Timecard</Button>
            <Button color="inherit" component={Link} to="/history">History</Button>
          </nav>
          <Button color="inherit" onClick={toggleTheme}>Toggle Theme</Button>
        </Toolbar>
      </AppBar>
      <main>
        <Routes>
          <Route path="/" element={<TimecardPage />} />
          <Route path="/history" element={<TimecardHistoryPage />} />
          <Route path="/details/:id" element={<TimecardDetailsPage />} />
        </Routes>
      </main>
    </Router>
  );
}

function AppWrapper() {
  return (
    <ThemeProvider>
      <TimecardProvider>
        <CssBaseline />
        <App />
      </TimecardProvider>
    </ThemeProvider>
  );
}

export default AppWrapper;
