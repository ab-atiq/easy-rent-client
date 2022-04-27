import {
  Grid,
  Typography,
  Container,
  Button,
  Modal,
  Box,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import Appbar from "../../../Shared/Appbar/Appbar";
import ReviewSingleCar from "./ReviewSingleCar";
import ResponsiveDatePickers from "./DatePicker";
import useAuth from "../../../../hooks/useAuth";
import ViewSingleReview from "./ViewSingleReview";
import PickupLocation from "./PickupLocation";
import SliderBrandCar from "./SliderBrandCar";
import SingleCarDetails from "./SingleCarDetails";

const FindSingleCar = () => {
  const { carName } = useParams();
  const [startValue, setStartValue] = useState(new Date());
  const [endValue, setEndValue] = useState(new Date());
  const [rent, setRent] = useState(0);
  const [newRent, setNewRent] = useState(rent);
  const [days, setDays] = useState(0);

  const { user } = useAuth();
  const startDate = startValue.toLocaleDateString();
  const endDate = endValue.toLocaleDateString();
  // console.log(startDate, endDate);

  useEffect(() => {
    fetch("https://guarded-taiga-13015.herokuapp.com/api/find/findBrand")
      .then((res) => res.json())
      .then((data) => {
        const filterCar = data.filter((data) => data.name.includes(carName));
        setRent(filterCar[0].rent);
      });
  }, []);

  const initialInfo = {
    name: user.displayName,
    email: user.email,
    carName: carName,
    startDate,
    endDate,
    rent: newRent,
  };
  // console.log(initialInfo);

  const rentNow = () => {
    const rentCar = { ...initialInfo };
    fetch("http://localhost:5000/api/find/singleCarRent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(rentCar),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data._id) {
          alert("Information successfully submitted.!");
        }
      });
  };

  const [viewReview, setViewReview] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/api/find/carReview")
      .then((res) => res.json())
      .then((data) => {
        const singleReview = data.filter((review) => review.carName == carName);
        setViewReview(singleReview);
      });
  }, []);

  const [slider, setSlider] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/api/find/sliderSingleCar")
      .then((res) => res.json())
      .then((data) => {
        const singleSlide = data.filter((slide) => slide.name == carName);
        setSlider(singleSlide);
      });
  }, []);

  useEffect(() => {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDays(diffDays);
    const sumRent = diffDays * rent;
    // console.log(sumRent);
    setNewRent(sumRent);
  }, [startDate, endDate]);

  return (
    <div>
      <Appbar />
      <Typography
        variant="h3"
        textAlign="center"
        style={{ fontWeight: "bold" }}
      >
        {carName} Car
      </Typography>
      {/* slider use here */}
      {slider?.map((slide) => (
        <SliderBrandCar slide={slide} />
      ))}

      <Container>
        <Grid container>
          <Grid item xs={12} md={8}>
            <SingleCarDetails />

            <Typography variant="h4" py={2} fontWeight="bold">
              Rating and Reviews
            </Typography>
            {viewReview?.map((review) => (
              <ViewSingleReview review={review} />
            ))}
            <Typography variant="h4" sx={{ py: 2, fontWeight: "bold" }}>
              Give Feedback
            </Typography>
            {/* Feedback comment */}
            <ReviewSingleCar carName={carName} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h4">Rent Here</Typography>
            <Typography variant="h5">US ${rent}/Day</Typography>
            <Divider />
            <Typography variant="h6" pt={2}>
              Trip Start
            </Typography>
            <ResponsiveDatePickers
              value={startValue}
              setValue={setStartValue}
            />
            <Typography variant="h6">Trip End</Typography>
            <ResponsiveDatePickers value={endValue} setValue={setEndValue} />
            <Typography variant="h6" pt={2}>
              Pickup and Return location
            </Typography>
            <PickupLocation />
            <Typography variant="h5">Total {days} days.</Typography>
            <Typography variant="h5">Total cost: ${newRent}</Typography>
            <Typography textAlign="center" py={2}>
              <Button onClick={() => rentNow()} variant="contained">
                Rent Now
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FindSingleCar;
