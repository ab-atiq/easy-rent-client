import React from "react";
import "./App.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import About from "./component/About/About";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/Home/Footer/Footer';
import Aboutus from "./Component/AboutUs/Aboutus";
import Notfound from "./Component/Shared/NotFound/Notfound";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/*' element={<Notfound />} />
=======
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
