import React from "react";
import Services from "../Services/Services";
import AnimationCar from "../AnimationCar/AnimationCar";
import Banner from "../Banner/Banner";
import SecBanner from "../../SecBanner/SecBanner";
import Facilities from "../Facilities/Facilities";
import Footer from "../../Shared/Footer/Footer";
import Hero from "../Hero/Hero";
import HomeQuestion from "../Question/HomeQuestion";
import Porsche from '../porsche/Porsche';
import Appbar from "../../Shared/Appbar/Appbar";
import AboutUs from "../AboutUs/AboutUs";
import CleanCar from "../CleanCar/CleanCar";


const Home = () => {
  return (
    <div>
      <SecBanner />
      <Porsche></Porsche>
      <Banner></Banner>
      <Services></Services>
      <AboutUs></AboutUs>
      <AnimationCar></AnimationCar>
      <Facilities></Facilities>
      <CleanCar></CleanCar>
      <HomeQuestion />
      
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
};

export default Home;
