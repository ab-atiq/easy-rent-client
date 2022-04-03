import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './pages/Home/Footer/Footer';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;