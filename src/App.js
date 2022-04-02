import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Footer from './components/Home/Footer/Footer';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='login' element={<Login />} /> */}
          {/* <Route path='register' element={<Register />} /> */}
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
