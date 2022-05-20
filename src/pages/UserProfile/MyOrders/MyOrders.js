import { useState, useEffect } from "react";
import React from 'react';
import MyOrder from "./MyOrder";
import { Container, Grid, Typography } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {

    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("https://guarded-taiga-13015.herokuapp.com/api/find/rentAllCars")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    console.log(orders);

    return (
        <Container>
            <Typography gutterBottom variant="h4" component="div">

            </Typography>
            <Grid container spacing={2}>
                {
                    orders.map(order =>
                        <MyOrder
                            key={order._id}
                            order={order}
                        ></MyOrder>)
                }
            </Grid>
        </Container>
    );
};

export default MyOrders;