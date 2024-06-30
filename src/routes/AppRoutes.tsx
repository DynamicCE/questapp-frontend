import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/login" element={<LoginPage />} />
       <Route path='/home' element= {<HomePage/>}/>
    <Route path='/register' element= {<RegisterPage/>}/>
    </Routes>
  );
};

export default AppRoutes;