import React from 'react';
import AnimationCar from '../../../components/Banner/AnimationCar/AnimationCar';
import Banner from '../../../components/Banner/Banner';
import Appbar from '../../Shared/Appbar/Appbar';
import Facilities from '../Facilities/Facilities';


const Home = () => {
    return (
        <div>
            <Appbar></Appbar>
            <Banner></Banner>
            <AnimationCar></AnimationCar>
            <Facilities></Facilities>
        </div>
    );
};

export default Home;