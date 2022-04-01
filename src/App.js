import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import './App.css';
import Aboutus from './Component/AboutUs/Aboutus';
import Home from './Component/Home/Home';
import Notfound from './Component/Shared/NotFound/Notfound';
=======
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/Home/Footer/Footer';
import Home from './pages/Home/Home/Home';
>>>>>>> md-tanber

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path='/' exact element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/*' element={<Notfound />} />
=======
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
>>>>>>> md-tanber
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
