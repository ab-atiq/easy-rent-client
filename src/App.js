import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './Component/AboutUs/Aboutus';
import Home from './Component/Home/Home';
import Notfound from './Component/Shared/NotFound/Notfound';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/*' element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
