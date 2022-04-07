import React from 'react';
import Services from '../../../Services/Services';
import AnimationCar from '../../AnimationCar/AnimationCar';
import Banner from '../../Banner/Banner';
import Appbar from '../../Shared/Appbar/Appbar';
import Facilities from '../Facilities/Facilities';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Porsche from '../porsche/Porsche';
import HomeQuestion from '../Question/HomeQuestion';

const Home = () => {
    return (
        <div >
            <Appbar></Appbar>
            <Header></Header>
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