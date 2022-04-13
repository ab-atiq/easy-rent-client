import React from "react";
import Services from "../Services/Services";
import NurServices from "../Services/NurServices";
import AnimationCar from "../AnimationCar/AnimationCar";
import Banner from "../Banner/Banner";
import NurBanner from "../Banner/NurBanner";
import SecBanner from "../../SecBanner/SecBanner";
import Facilities from "../Facilities/Facilities";
import NurFooter from "../../Shared/Footer/NurFooter";
import Hero from "../Hero/Hero";
import HomeQuestion from "../Question/HomeQuestion";
import Porsche from '../porsche/Porsche';
import AboutUs from "../AboutUs/AboutUs";
import CleanCar from "../CleanCar/CleanCar";


const Home = () => {
  return (
    <div>
      
      <SecBanner />
      <NurBanner></NurBanner>
      <Porsche></Porsche>
      <Banner></Banner>
      <Services></Services>
      <NurServices></NurServices>
      <AboutUs></AboutUs>
      <AnimationCar></AnimationCar>
      <HomeQuestion />
      <CleanCar></CleanCar>
      <Hero></Hero>
      <Facilities></Facilities>
      <NurFooter></NurFooter>
    </div>
  );
};

export default Home;
