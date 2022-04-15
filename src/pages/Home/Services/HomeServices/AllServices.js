import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Service from "./Service";
import "./Services.css";
import { data } from "../FakeData/FakeDataHome";
import AppBar from "../../../Shared/AppBar/AppBar";

const AllServices = () => {
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch(All_data)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [services]);

  return (
    <div>
      <AppBar></AppBar>
      <Box
        sx={{ textAlign: "center", fontSize: "3.5rem", mb: "40px", mt: "40px" }}
      >
        {" "}
        Our services
      </Box>
      <Container>
        <Grid container>
          {data.map((serviceP) => (
            <Grid
              item
              sx={12}
              sm={6}
              md={4}
              lg={3}
              className="Card"
              container
              spacing={1}
            >
              <Service key={serviceP._id} service={serviceP}></Service>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AllServices;
