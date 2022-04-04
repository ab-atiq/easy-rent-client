import React from 'react';
import Banner from '../../Banner/Banner';
import Appbar from '../../Shared/Appbar/Appbar';
import Services from '../Services/Services';
import AboutUs from '../../../Components/AboutUs/AboutUs';
import Facilities from '../Facilities/Facilities';
import AnimationCar from '../../'


const Home = () => {
    return (
        <div >
            <Appbar></Appbar>
            <Banner></Banner>
            <AnimationCar></AnimationCar>
            <Facilities></Facilities>
            
        </div>
    );
};

export default Home;