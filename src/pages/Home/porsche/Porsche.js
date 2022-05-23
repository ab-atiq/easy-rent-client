import Car from "../../../images/car.png";
import './Porsche.css';
import React from 'react';

const Porsche = () => {
    return (
        <div className="main">
            <div className="text">
                <h1>Long-Journey experience with
                    <br /> short commute convenience.</h1>
                <p className="abs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro exercitationem expedita vero</p>
                {/* <p className="abs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro exercitationem expedita ver</p>
                <p className="abs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro exercitationem expedita</p>
                <p className="abs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro exercitationem exped</p>
                <p className="abs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro exerc</p>
                <p className="abs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro e</p>
                <p className="abs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro</p>
                <p className="abs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro</p>
                <p className="abs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro</p>
                <p className="abs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro exercitationem expedita vero</p>
                <p className="abs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro exercitationem expedita vero</p> */}
                {/* <p className="abs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro exercitationem expedita vero cumque
                    <br /> cumque veritatis nisi qui voluptatem, deleniti tempora modi alias iure, a amet beatae repudiandae
                    <br /> repudiandae neque officiis. Dolore culpa reiciendis sequi ullam, quibusdam, voluptatibus a itaque
                    <br /> itaque dignissimos non neque, quam nobis enim ipsam quae totam. Fugiat cupiditate expedita <br /> explicabo praesentium corporis. repudiandae neque officiis. Dolore culpa reiciendis. sequi ullam, quibusdam, voluptatibus a itaque. </p> */}
            </div>
            <div className="car">
                <img src={Car} alt="" />
            </div>
        </div>
    );
};

export default Porsche;