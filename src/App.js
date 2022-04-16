import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Shared/Login/Login";
import Register from "./pages/Shared/Register/Register";
import NotFound from "./pages/NotFound/Notfound";
import AllServices from "./pages/Home/Services/HomeServices/AllServices";
import ContactUs from "./pages/ContactUs/ContactUs";
import Small from "./pages/Home/Services/CarType/Small";
import MainService from "./pages/Home/Services/DetailsCar/MainService";
import Medium from "./pages/Home/Services/CarType/Medium";
import Large from "./pages/Home/Services/CarType/Large";
import CourseHome from "./pages/Home/FullCourses/CourseHome/CourseHome";
import GetCourses from "./pages/Home/FullCourses/GetCourse/GetCourses";
import FindBasisBrand from "./pages/Home/FindCar/FindBasisBrand/FindBasisBrand";
import Dashboard from "./pages/Dashboard/Dashboard";
import AboutUs from "./pages/Home/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/details" element={<MainService />} />
          <Route path="/small" element={<Small />} />
          <Route path="/medium" element={<Medium />} />
          <Route path="/large" element={<Large />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/CourseHome" element={<CourseHome />} />
          <Route path="/GetCourses" element={<GetCourses />} />
          <Route path="car/:carName" element={<FindBasisBrand />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
