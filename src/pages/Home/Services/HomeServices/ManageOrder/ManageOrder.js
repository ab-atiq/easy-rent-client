import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ManageOrderCart from './ManageOrderCart';

const ManageOrder = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/api/service")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, [services]);

    return (
        <div>
           <Container>
        <h1 className="car-service-headline">Manage Order </h1>
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 5 }}
          columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
        >
          {services.map((cardata) => (
            <ManageOrderCart key={cardata._id} alldata={cardata}></ManageOrderCart>
          ))}
        </Grid>
      </Container>
        </div>
    );
};

export default ManageOrder;