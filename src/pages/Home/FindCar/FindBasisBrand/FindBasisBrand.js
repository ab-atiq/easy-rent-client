import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
// import cars from "./FindBasisBrand.json";
import SingleFindBasisBrand from "./SingleFindBasisBrand";

const FindBasisBrand = () => {
  const [cars, setCars] = useState();
  const { carName } = useParams();
  console.log(carName);
  useEffect(() => {
    fetch("/FindBasisBrand.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filterCar = data.filter((data) => data.name.includes(carName));
        console.log(filterCar);
        setCars(filterCar);
      });
  }, []);

  console.log(cars);

  return (
    <Container>
      <Typography variant="h4">Details Car - {carName}</Typography>
      <Typography variant="h4">Top Rental Car</Typography>
      <Grid container spacing={3}>
        {cars?.map((car) => (
          <SingleFindBasisBrand car={car} />
        ))}
      </Grid>
    </Container>
  );
};

export default FindBasisBrand;
