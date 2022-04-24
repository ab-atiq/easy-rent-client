import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/Shared/Login/Login';
import Register from './pages/Shared/Register/Register';
import NotFound from './pages/NotFound/Notfound';
import AllServices from './pages/Home/Services/HomeServices/AllServices';
import ContactUs from './pages/ContactUs/ContactUs';
import Small from './pages/Home/Services/CarType/Small';
import MainService from './pages/Home/Services/DetailsCar/MainService';
import Medium from './pages/Home/Services/CarType/Medium';
import Large from './pages/Home/Services/CarType/Large';
import CourseHome from './pages/Home/FullCourses/CourseHome/CourseHome';
import GetCourses from './pages/Home/FullCourses/GetCourse/GetCourses';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import FindBasisBrand from "./pages/Home/FindCar/FindBasisBrand/FindBasisBrand";
import NewDashbord from "./pages/NewDashbord/NewDashbord";
import Popup from "./pages/Home/Services/Popup/Popup";
import Profile from './pages/UserProfile/Profile/Profile';
import DashboardHome from './pages/NewDashbord/DashbordHome/DashboardHome';
import User from './pages/NewDashbord/User/User';
import UserDetails from './pages/UserDetails/UserDetails'
import AddReview from './pages/AddReview/AddReview';

function App() {

  return (
    <div className="App">

      <AuthProvider>

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
            <Route path='/profile' element={<Profile />} />

            <Route path='/newDashbord' element={<NewDashbord />}>
              <Route path='/newDashbord/' element={<DashboardHome />} />
              <Route path='/newDashbord/user' element={<User />} />
            </Route>

            <Route path='/CourseHome' element={<CourseHome />} />
            <Route path='/book/:BookingId' element={<Popup />} />
            <Route path='/GetCourses' element={<GetCourses />} />
            <Route path="car/:carName" element={<FindBasisBrand />} />
            <Route path='/userdetails/:id' element={<UserDetails />} />
            <Route path='/addreview' element={<AddReview></AddReview>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
