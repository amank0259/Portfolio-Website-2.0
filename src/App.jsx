import React, { useEffect, useState } from 'react';
import ThemeContextProvider from './contexts/ThemeContext';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import ActiveSectionContextProvider from './contexts/activeSessionContext';
import Loader from './ui/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);
    return () => clearTimeout(timer);
  }, []);
  return (<>
    {loading ? <Loader /> :
      <>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </>}
  </>

  )
}

export default App