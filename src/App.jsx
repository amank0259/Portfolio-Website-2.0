import React from 'react';
import ThemeContextProvider from './contexts/ThemeContext';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'

const App = () => {
  return (
    <ThemeContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeContextProvider>
  )
}

export default App