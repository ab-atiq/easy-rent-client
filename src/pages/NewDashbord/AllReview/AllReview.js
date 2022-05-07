import React, { useEffect, useState } from 'react';
// import { Container} from "@mui/material";
// import Grid from '@mui/material/Grid';
import AllReviewCart from "./AllReviewCart";
import './AllReview.css';

const AllReview = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://guarded-taiga-13015.herokuapp.com/api/addreview')
        .then(res => res.json())
        .then(data => setReview(data));

    }, []);
    
  return (
    <div className='dashbord-review'>
        {/* <Container> */}
        <h2>All Users Review</h2>
        <div className="dashbord-review-cart">
        {/* <Grid container spacing={{ xs: 2, md: 3, lg: 5}} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            <Grid item xs={12} sm={6} md={4} lg={3}> */}

                {
                review.map((data) => <AllReviewCart
                key={data._id}
                reviewdata={data} 
                ></AllReviewCart>  )
                }
            
            {/* </Grid>
        </Grid> */}
        </div>         
      {/* </Container> */}
        
    </div>
  )
}

export default AllReview