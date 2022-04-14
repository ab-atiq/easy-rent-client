import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import SingleFindBasisBrand from "./SingleFindBasisBrand";
import { Box } from "@mui/system";
import Footer from "../../../Shared/Footer/Footer";

const FindBasisBrand = () => {
  const [cars, setCars] = useState();
  const [data, setData] = useState();
  const { carName } = useParams();

  useEffect(() => {
    fetch("/FindBasisBrand.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const filterCar = data.filter((data) => data.name.includes(carName));
        // console.log(filterCar);
        setCars(filterCar);
      });
  }, []);

  useEffect(() => {
    fetch("/FindDataBasisBrand.json")
      .then((res) => res.json())
      .then((data) => {
        const filterData = data.filter((data) => data.brand.includes(carName));
        setData(filterData[0]);
      });
  }, []);

  console.log(data);

  return (
    <Box>
      <Container>
        <Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold" }}
            textAlign="center"
            py={3}
          >
            Top Rental Car {carName}
          </Typography>
          <Grid container spacing={1} maxWidth="md" mx="auto">
            {cars?.map((car) => (
              <SingleFindBasisBrand car={car} />
            ))}
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={3} alignItems="center" py={4} maxWidth="xl">
            <Grid item xs={12} md={6}>
              <img src={data?.imgUrl1} alt="" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" py={2}>
                {data?.title1}
              </Typography>
              <Typography variant="body1">{data?.description1}</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box maxWidth="md" mx="auto">
          <Typography variant="h3" py={2} textAlign="center">
            Top {carName} Models
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h4" py={2}>
                {data?.topTitle1}
              </Typography>
              <Typography variant="body1">{data?.topDescription1}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h4" py={2}>
                {data?.topTitle2}
              </Typography>
              <Typography variant="body1">{data?.topDescription2}</Typography>
            </Grid>
            <Grid item  xs={12} sm={6} md={4}>
              <Typography variant="h4" py={2}>
                {data?.topTitle3}
              </Typography>
              <Typography variant="body1">{data?.topDescription3}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default FindBasisBrand;
