import React from 'react';

const BlogCart = ({alldata}) => {
  const {image, title, details } = alldata;
  return (
    <div className="bolgcartbody">
        <img src={image} alt="" />
        <h1>{title}</h1>
        <p>{details}</p>
    </div>
  )
}

export default BlogCart