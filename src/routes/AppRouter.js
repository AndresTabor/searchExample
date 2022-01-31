import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from '../components/Search';

const AppRouter = () => {
  return <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Search/>}/>
        </Routes>
      </BrowserRouter>
  </div>;
};

export default AppRouter;
