import React from "react";
import Services from "../../../Services/Services";
import AnimationCar from "../../AnimationCar/AnimationCar";
import Banner from "../../Banner/Banner";
import SecBanner from "../../SecBanner/SecBanner";
// import Appbar from "../../Shared/Appbar/Appbar";
import Header from "../../Shared/Header/Header";
import Facilities from "../Facilities/Facilities";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import HomeQuestion from "../Question/HomeQuestion";

const Home = () => {
  return (
    <div>
      {/* <Appbar></Appbar> */}
      <Header />
      <SecBanner />
      <Banner></Banner>
      <Hero></Hero>
      <Services></Services>
      <AnimationCar></AnimationCar>
      <Facilities></Facilities>
      <HomeQuestion />
      <Footer></Footer>
    </div>
  );
};

export default Home;
