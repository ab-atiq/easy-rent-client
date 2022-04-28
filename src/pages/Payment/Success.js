import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import axios from 'axios';

const Success = () => {
    const navigate = useNavigate()
    const {tran_id} = useParams()
    const [order, setOrder] = useState({})
    const {product_name,product_imgUrl, cus_name, cus_email, val_id} = order || {};
    useEffect(()=>{
        fetch(`https://guarded-taiga-13015.herokuapp.com/orders/${tran_id}`)
        .then(res=> res.json())
        .then(data => setOrder(data))
    },[tran_id]);

    const validatePayment=()=>{
        const data = {
            tran_id: tran_id,
            val_id: val_id
        }
        axios.post(`https://guarded-taiga-13015.herokuapp.com/validate`, data)
        .then(res=> {
            if(res.data === 'Successful'){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your Payment valided and order confirmed',
                    showConfirmButton: false,
                    timer: 2500
                  })
                  navigate('/home')
            }
        })
    }
    return (
        <div className='car-card-container'>
        <Grid container>
            <Grid item md={4} className='car-card'>
            <Typography variant="h4" component="div" gutterBottom>
                    Payment Done successfully
                </Typography>
                <img className='car-card-img' src={product_imgUrl} alt="" />
                <Typography variant="h5" component="div" gutterBottom>
                    {`Brand: ${product_name}`}
                </Typography>
                <hr />
                
                <Typography variant="h6" component="div" gutterBottom>
                    {`Your Name: ${cus_name}`}
                </Typography>
                <Typography variant="h6" component="div" gutterBottom>
                    {`Your Email: ${cus_email}`}
                </Typography>
                <Button onClick={validatePayment} variant="contained">Validate Order</Button>
            </Grid>
        </Grid>
        </div>
    );
};

export default Success;