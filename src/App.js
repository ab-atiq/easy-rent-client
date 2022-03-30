import React from 'react';
import './App.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Banner />}/>
 
      
    </Routes>
  </BrowserRouter>,
    </div>
  );
}

export default App;
