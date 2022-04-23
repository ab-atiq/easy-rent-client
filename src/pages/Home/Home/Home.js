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
import SearchedCar from "../Hero/SearchedCar";
import CleanCar from "../CleanCar/CleanCar";
import FindCar from "../FindCar/FindCar";
import Appbar from "../../Shared/Appbar/Appbar";
import Footer from "../../Shared/Footer/Footer";
import Reviews from "../Reviews/Reviews";


const Home = () => {
  return (
    <div>
      <Appbar></Appbar>
      <SecBanner />
      <NurBanner></NurBanner>
      <Hero></Hero>
      <SearchedCar></SearchedCar>
      <Porsche></Porsche>
      <Banner></Banner>
      <FindCar />
      <Services></Services>
      <AboutUs></AboutUs>
      <AnimationCar></AnimationCar>
      <CleanCar></CleanCar>
      <HomeQuestion />
      <Facilities></Facilities>
      <Reviews></Reviews>
      <NurFooter></NurFooter>
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
