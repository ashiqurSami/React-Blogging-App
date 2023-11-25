import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DetailsPage from './Pages/DetailsPage';
import ByCategoryPage from './Pages/ByCategoryPage';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/byCategory/:categoryID' element={<ByCategoryPage/>}></Route>
          <Route path='/details/:postID' element={<DetailsPage/>}></Route>
        </Routes>
    </BrowserRouter>

  );
};

export default App;