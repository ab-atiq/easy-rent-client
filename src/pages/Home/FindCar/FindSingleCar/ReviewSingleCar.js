import { Container } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../../hooks/useAuth";

const ReviewSingleCar = () => {
  const { user } = useAuth();
  const initialInfo = { name: user.displayName, image: user.photoURL };
  // const initialInfo = { buyerName: user.displayName };
  // console.log(initialInfo);
  const [review, setReview] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...review };
    newInfo[field] = value;
    // console.log(newInfo);
    setReview(newInfo);
  };

  const handleReviewSubmit = (e) => {
    const reviewAdd = { ...review };
    // console.log(review);
    // send to the server
    fetch("http://localhost:5000/api/find/carReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewAdd),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data._id) {
          alert("Information successfully submitted.!");
          e.target.reset();
        }
      });

    e.preventDefault();
  };

  return (
    <Container>
      <form onSubmit={handleReviewSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={user.displayName}
          onBlur={handleOnBlur}
          required
          style={{ width: "80%" }}
        />
        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          placeholder="Your Image URL"
          defaultValue={user.photoURL}
          onBlur={handleOnBlur}
          required
          style={{ width: "80%" }}
        />
        <label>Rating:</label>
        <input
          type="number"
          name="star"
          placeholder="Rating (Please give 0-5 number)"
          onBlur={handleOnBlur}
          min="0"
          max="5"
          style={{ width: "80%" }}
        />
        <label>Description About Product:</label>
        <textarea
          type="text"
          name="description"
          rows="10"
          placeholder="Description About Product"
          onBlur={handleOnBlur}
          required
          style={{ width: "80%" }}
        />
        <input
          style={{ width: "110px" }}
          className="btn btn-primary"
          type="submit"
          value="Add Review"
        />
      </form>
    </Container>
  );
};

export default ReviewSingleCar;
