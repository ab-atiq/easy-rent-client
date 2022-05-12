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
import AuthProvider from './contexts/AuthProvider';
import FindBasisBrand from "./pages/Home/FindCar/FindBasisBrand/FindBasisBrand";
import NewDashbord from "./pages/NewDashbord/NewDashbord";
import Popup from "./pages/Home/Services/Popup/Popup";
import ChatApp from './pages/Chat/ChatApp';
import './App.css';
import DashboardHome from './pages/NewDashbord/DashbordHome/DashboardHome';
import User from './pages/NewDashbord/User/User';
import UserOrder from './pages/NewDashbord/UserOrder/UserOrder';
import AllReview from './pages/NewDashbord/AllReview/AllReview';
import UserDetails from './pages/UserDetails/UserDetails'
import FindSingleCar from './pages/Home/FindCar/FindSingleCar/FindSingleCar';
import AddReview from './pages/AddReview/AddReview';
import Success from './pages/Payment/Success';
import Cancel from './pages/Payment/Cancel';
import ProfileHome from './pages/UserProfile/ProfileHome/ProfileHome';
import Profile from './pages/UserProfile/Profile/Profile';
import AddService from './pages/Home/Services/AddService/AddService';
import PayNow from './pages/Home/Services/PayNow/PayNow';
import AboutUs from './pages/Home/AboutUs/AboutUs';
import MyOrders from './pages/UserProfile/MyOrders/MyOrders';

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
            <Route path='/myOrders' element={<MyOrders />} />
            <Route path='/addService' element={<AddService />} />
            <Route path='/pay' element={<PayNow />} />
            <Route path='/profileHome' element={<ProfileHome />} />

            <Route path='/newDashbord' element={<NewDashbord />}>
              <Route path='/newDashbord/' element={<DashboardHome />} />
              <Route path='/newDashbord/userOrder' element={<UserOrder />} />
              <Route path='/newDashbord/user' element={<User />} />
              <Route path='/newDashbord/dashreview' element={<AllReview />} />
            </Route>

            <Route path='/CourseHome' element={<CourseHome />} />
            <Route path='/book/:BookingId' element={<Popup />} />
            <Route path='AboutUs' element={<AboutUs />} />
            <Route path='/GetCourses' element={<GetCourses />} />
            <Route path='/ChatApp' element={<ChatApp />} />
            <Route path="car/:carName" element={<FindBasisBrand />} />
            <Route path="singleCar/:carName" element={<FindSingleCar />} />
            <Route path='/userdetails/:id' element={<UserDetails />} />
            <Route path='/addreview' element={<AddReview></AddReview>} />
            <Route path='/paymentsuccess/:tran_id' element={<Success></Success>} />
            <Route path='/paymentcancel' element={<Cancel></Cancel>} />
            <Route path='/addreview' element={<AddReview></AddReview>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;


