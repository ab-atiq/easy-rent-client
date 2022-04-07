import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './pages/Home/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Login from './pages/Shared/Login/Login';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='register' element={<Register />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;