import React from 'react';
import AnimationCar from '../../../Components/Banner/AnimationCar/AnimationCar';
import Banner from '../../../Components/Banner/Banner';
import Appbar from '../../Shared/Appbar/Appbar';
// import Facilities from '../Facilities/Facilities';



const Home = () => {
    return (
        <div>
            <Appbar></Appbar>
            <Banner></Banner>
            <AnimationCar></AnimationCar>
            {/* <Facilities></Facilities> */}
        </div>
    );
};

export default Home;