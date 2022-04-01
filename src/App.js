import React from "react";
import "./App.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Services from "./pages/Home/Services/Services";

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Services />} />


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
