import React from "react";
import Services from "../../../Services/Services";
import AnimationCar from "../../AnimationCar/AnimationCar";
import Banner from "../../Banner/Banner";
import Appbar from "../../Shared/Appbar/Appbar";
import Facilities from "../Facilities/Facilities";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import HomeQuestion from "../Question/HomeQuestion";

const Home = () => {
  return (
    <div>
      <Appbar></Appbar>
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
