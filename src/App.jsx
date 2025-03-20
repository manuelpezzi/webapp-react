import DefaultLayout from './layouts/DefaultLayout';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/Homepage';
import MoviePage from './pages/MoviePage';
import GlobalContext from './contexts/globalContext';
import { useState } from 'react';
import CreateMoviePage from './pages/CreateMoviePage';
import React from 'react';
function App() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              {/* qui vanno le pagine */}
              <Route path="/" Component={HomePage} />
              <Route path='/movie/create' Component={CreateMoviePage} />
              <Route path="/movies/:id" Component={MoviePage} />

            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;