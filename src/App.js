import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/Shared/Login/Login';
import Register from './pages/Shared/Register/Register';
import NotFound from './pages/NotFound/Notfound';
import ContactUs from './pages/ContactUs/ContactUs';
import AllServices from './pages/Home/Services/AllServices';
import AddCourses from './pages/Home/FullCourses/AddCourses/AddCourses';
import GetCourses from './pages/Home/FullCourses/GetCourse/GetCourses';
import './App.css';
import CourseHome from './pages/Home/FullCourses/CourseHome/CourseHome';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/services' element={<AllServices />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/CourseHome' element={<CourseHome />} />
          <Route path='/AddCourses' element={<AddCourses />} />
          <Route path='/GetCourses' element={<GetCourses />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
