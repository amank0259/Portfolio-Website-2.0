import React from 'react';
import ThemeContextProvider from './contexts/ThemeContext';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import ActiveSectionContextProvider from './contexts/activeSessionContext';

const App = () => {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  )
}

export default App