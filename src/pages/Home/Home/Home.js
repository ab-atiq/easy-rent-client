import React from 'react';
import AnimationCar from '../../../components/Banner/AnimationCar/AnimationCar';
import Banner from '../../../components/Banner/Banner';
import Appbar from '../../Shared/Appbar/Appbar';


const Home = () => {
    return (
        <div>
            <Appbar></Appbar>
            <Banner></Banner>
            <AnimationCar></AnimationCar>
        </div>
    );
};

export default Home;