import React from 'react';
import Banner from '../../../Components/Banner/Banner';
import Appbar from '../../Shared/Appbar/Appbar';
import AnimationCar from '../../../Components/Banner/AnimationCar/AnimationCar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Appbar></Appbar>
            <Banner></Banner>
            <AnimationCar></AnimationCar>
            <Services />
        </div>
    );
};

export default Home;