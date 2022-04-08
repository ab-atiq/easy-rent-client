import React from "react";
import Services from "../../../Services/Services";
import AnimationCar from "../../AnimationCar/AnimationCar";
import Banner from "../../Banner/Banner";
import SecBanner from "../../SecBanner/SecBanner";
import Header from "../../Shared/Header/Header";
import Facilities from "../Facilities/Facilities";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import HomeQuestion from "../Question/HomeQuestion";
import Porsche from '../porsche/Porsche';

const Home = () => {
  return (
    <div>
      <Header />
      <SecBanner />
      <Porsche></Porsche>
      <Banner></Banner>
      <Services></Services>
      <AnimationCar></AnimationCar>
      <Facilities></Facilities>
      <HomeQuestion />
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
};

export default Home;
