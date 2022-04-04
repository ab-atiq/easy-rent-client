import React from 'react';
import Services from '../../../Services/Services';
import AnimationCar from '../../AnimationCar/AnimationCar';
import Banner from '../../Banner/Banner';
import Appbar from '../../Shared/Appbar/Appbar';
import Facilities from '../Facilities/Facilities';




const Home = () => {
    return (
        <div >
            <Appbar></Appbar>
            <Banner></Banner>
            <Services></Services>
            <AnimationCar></AnimationCar>
            <Facilities></Facilities>
            
        </div>
    );
};

export default Home;