import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/login" element={<LoginPage />} />
       <Route path='/home' element= {<HomePage/>}/>
    </Routes>
  );
};

export default AppRoutes;