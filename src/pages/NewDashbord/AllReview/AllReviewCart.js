import React from 'react'
import Rating from '@mui/material/Rating';


const AllReviewCart = ({reviewdata}) => {
    const {name, imgUrl, rating, designation} = reviewdata
  return (
    <div className='review-cart'> 

        <img src={imgUrl} alt="" />       
        <h2>{name}</h2>
        <p>{designation}</p>

        <Rating name="read-only" value={rating} readOnly />
        
    </div>
  )
}

export default AllReviewCart