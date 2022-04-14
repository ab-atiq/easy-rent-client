import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/Shared/Login/Login';
import Register from './pages/Shared/Register/Register';
import NotFound from './pages/NotFound/Notfound';
import AllServices from './pages/Home/Services/HomeServices/AllServices';
import ContactUs from './pages/ContactUs/ContactUs';
import './App.css';
import Small from './pages/Home/Services/CarType/Small';
import MainService from './pages/Home/Services/DetailsCar/MainService';
import Medium from './pages/Home/Services/CarType/Medium';
import Large from './pages/Home/Services/CarType/Large';
import Dashbord from './pages/Dashbord/Dashbord';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Appbar></Appbar> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/services' element={<AllServices />} />
          <Route path='/details' element={<MainService />} />
          <Route path='/small' element={<Small />} />
          <Route path='/medium' element={<Medium />} />
          <Route path='/large' element={<Large />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashbord' element={<Dashbord />}>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
