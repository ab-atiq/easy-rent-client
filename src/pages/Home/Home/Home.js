import React from 'react';
import Banner from '../../../Components/Banner/Banner';
import Appbar from '../../Shared/Appbar/Appbar';
import AnimationCar from '../../../Components/Banner/AnimationCar/AnimationCar';

const Home = () => {
    return (
        <div>
            <h2>Hello</h2>
            <Appbar></Appbar>
            <Banner></Banner>
            <AnimationCar></AnimationCar>

        </div>
    );
};

export default Home;