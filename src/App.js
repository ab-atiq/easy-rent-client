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
<<<<<<< HEAD
          <Route path='/' element={<Login />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Routes>
        <Footer></Footer>
=======
          <Route path='/' exact element={<Home />} />
          <Route path='/home'  element={<Home />} />
          <Route path='/aboutus'  element={<Aboutus />} />
          <Route path='/*'  element={<Notfound />} />
        </Routes>
>>>>>>> 68faf2b65b6f87a2a787cebc68b43e9bb015fcce
      </BrowserRouter>
    </div>
  );
}

export default App;
