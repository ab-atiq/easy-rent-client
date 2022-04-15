import React from "react";
import Services from "../Services/HomeServices/Services";
import AnimationCar from "../AnimationCar/AnimationCar";
import Banner from "../Banner/Banner";
import NurBanner from "../Banner/NurBanner";
import SecBanner from "../../SecBanner/SecBanner";
import Facilities from "../Facilities/Facilities";
import NurFooter from "../../Shared/Footer/NurFooter";
import Hero from "../Hero/Hero";
import HomeQuestion from "../Question/HomeQuestion";
import Porsche from "../porsche/Porsche";
import AboutUs from "../AboutUs/AboutUs";
import CleanCar from "../CleanCar/CleanCar";
<<<<<<< HEAD
import Appbar from "../../Shared/Appbar/Appbar";
=======
import FindCar from "../FindCar/FindCar";
>>>>>>> development


const Home = () => {
  return (
    <div>
<<<<<<< HEAD
      <Appbar></Appbar>
=======
    
>>>>>>> development
      <SecBanner />
      <NurBanner></NurBanner>
      <Hero></Hero>
      <Porsche></Porsche>
      <Banner></Banner>
      <FindCar />
      <Services></Services>
      <AboutUs></AboutUs>
      <AnimationCar></AnimationCar>
      <CleanCar></CleanCar>
      <HomeQuestion />
      <Facilities></Facilities>
      <NurFooter></NurFooter>
    </div>
  );
};

export default Home;
