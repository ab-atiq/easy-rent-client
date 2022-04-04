import React from 'react';
import AnimationCar from '../../../Components/AnimationCar/AnimationCar';
import Banner from '../../../Components/Banner/Banner';
import Appbar from '../../Shared/Appbar/Appbar';
import Footer from '../../Shared/Footer/Footer';
import Facilities from '../Facilities/Facilities';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div >
            <Appbar></Appbar>
            <Banner></Banner>
            <Hero></Hero>
            <AnimationCar></AnimationCar>
            <Facilities></Facilities>
            <Footer></Footer>
        </div>
    );
};

export default Home;