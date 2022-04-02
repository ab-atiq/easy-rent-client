import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Services from "./pages/Home/Services/Services";
import AboutUs from "./Components/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Services />} />
          <Route path="/" element={<AboutUs />} />



        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
