import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForecastView from './views/ForecastView';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<ForecastView />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;