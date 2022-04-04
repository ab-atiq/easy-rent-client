import React from 'react';
import AnimationCar from '../../AnimationCar/AnimationCar';
import Banner from '../../Banner/Banner';
import Appbar from '../../Shared/Appbar/Appbar';
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
        </div>
    );
};

export default Home;