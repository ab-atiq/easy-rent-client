import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/Shared/Login/Login';
import Register from './pages/Shared/Register/Register';
import './App.css';
import NotFound from './pages/NotFound/Notfound';
import AllServices from './pages/Home/Services/HomeServices/AllServices';
import ContactUs from './pages/ContactUs/ContactUs';
import DetailsCar from './pages/Home/Services/DetailsCar/DetailsCar';
import Appbar from './pages/Shared/Appbar/Appbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Appbar></Appbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/services' element={<AllServices />} />
          <Route path='/details' element={<DetailsCar />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
