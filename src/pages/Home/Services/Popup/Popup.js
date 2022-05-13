import {
  Box,
  Button,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Popup.css";
import { Link } from "react-router-dom";

const Popup = () => {
  const { BookingId } = useParams();
  const [service, setService] = useState({});
  const navigate = useNavigate();

  // const handelButton = () => {
  //   window.location.replace("http://localhost:5000/init");
  // };

  useEffect(() => {
    fetch(`http://localhost:5000/api/service/${BookingId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [BookingId]);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = () => {
    navigate("/pay");
  };

  return (
    <div className="design_popup">
      <Container>
        <Grid container spacing={2} sx={{ mt: 8 }}>
          <Grid className="text_center" item sx={12} sm={6} md={6} lg={6}>
            <img width="60%" src={service.image} alt="" />
            <br />
            <div className="designCard">
              <h1>Car Name:- {service.name}</h1>
              <h3>Model:- {service.year}</h3>
              <h3>Price Per Day :- $ {service.price}</h3>
              <h3>Kilo :- {service.kilo}</h3>
              <h3>Fual :- {service.fual}</h3>
              <p>
                Details :- <p> {service.details}</p>{" "}
              </p>
            </div>
          </Grid>

          <Grid className="text_center" item sx={12} sm={6} md={6} lg={6}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                "& .MuiTextField-root": { m: 1, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="filled-error"
                  label="FirstName"
                  defaultValue=""
                  variant="filled"
                  required
                />
                <TextField
                  id="filled-error-helper-text"
                  label="LastName"
                  defaultValue=""
                  variant="filled"
                  required
                />
              </div>
              <div>
                <TextField
                  id="filled-error"
                  label="Address"
                  defaultValue=""
                  variant="filled"
                  required
                />
                <TextField
                  id="filled-error-helper-text"
                  label="division"
                  defaultValue=""
                  variant="filled"
                  required
                />
              </div>

              <Box sx={{ width: 500 }}>
                <Button
                  // onClick={handelButton}
                  required
                  type="submit"
                  className="button_design"
                  variant="contained"
                >
                  Continue With Pay
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Popup;
