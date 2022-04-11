import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Service from "./Service";
import "./Services.css";

const data = [
  {
    _id: "1",
    image: "https://i.ibb.co/K9pH3RG/car-1.png",
    name: "Car One",
    price: "1500",
    discountPrice: "800",
    details:
      "\nAssociate Medical Director, Center for Bioengineering Innovation and Design, Department of Biomedical Engineering\nAssistant Professor of Medicine",
  },
  {
    _id: "2",
    image: "https://i.ibb.co/VtksqQw/car-2.png",
    name: "Car 2",
    price: "1500",
    discountPrice: "800",
    details:
      "\nAssociate Medical Director, Center for Bioengineering Innovation and Design, Department of Biomedical Engineering\nAssistant Professor of Medicine",
  },
  {
    _id: "3",
    image: "https://i.ibb.co/GWjjP4N/car-3.png",
    name: "Car 3",
    price: "1500",
    discountPrice: "800",
    details:
      "\nAssociate Medical Director, Center for Bioengineering Innovation and Design, Department of Biomedical Engineering\nAssistant Professor of Medicine",
  },
  {
    _id: "4",
    image: "https://i.ibb.co/cJ4NWwg/car-4.png",
    name: "Car 4",
    price: "1500",
    discountPrice: "800",
    details:
      "\nAssociate Medical Director, Center for Bioengineering Innovation and Design, Department of Biomedical Engineering\nAssistant Professor of Medicine",
  },
  {
    _id: "5",
    image: "https://i.ibb.co/gj8pYLk/car-5.png",
    name: "Car 5",
    price: "1500",
    discountPrice: "800",
    details:
      "\nAssociate Medical Director, Center for Bioengineering Innovation and Design, Department of Biomedical Engineering\nAssistant Professor of Medicine",
  },
  {
    _id: "6",
    image: "https://i.ibb.co/QcJFyn2/car-6.png",
    name: "Car 6",
    price: "1500",
    discountPrice: "800",
    details:
      "\nAssociate Medical Director, Center for Bioengineering Innovation and Design, Department of Biomedical Engineering\nAssistant Professor of Medicine",
  },
  {
    _id: "7",
    image: "https://i.ibb.co/RDrG4qK/car-7.png",
    name: "Car 7",
    price: "1500",
    discountPrice: "800",
    details:
      "\nAssociate Medical Director, Center for Bioengineering Innovation and Design, Department of Biomedical Engineering\nAssistant Professor of Medicine",
  },
  {
    _id: "8",
    image: "https://i.ibb.co/LvHvdMS/car-8.png",
    name: "Car 8",
    price: "1500",
    discountPrice: "800",
    details:
      "\nAssociate Medical Director, Center for Bioengineering Innovation and Design, Department of Biomedical Engineering\nAssistant Professor of Medicine",
  },
  {
    _id: "9",
    image: "https://i.ibb.co/QcJFyn2/car-6.png",
    name: "Car 6",
    price: "1500",
    discountPrice: "800",
    details:
      "\nAssociate Medical Director, Center for Bioengineering Innovation and Design, Department of Biomedical Engineering\nAssistant Professor of Medicine",
  },
];

const Services = () => {
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch(All_data)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [services]);

  return (
    <div>
      <Box
        sx={{ textAlign: "center", fontSize: "3.5rem", mb: "70px", mt: "60px" }}
      >
        {" "}
        Our services
      </Box>
      <Container>
        <Grid container>
          {data.map((serviceP) => (
            <Grid
              item
              sm={12}
              md={4}
              xs={12}
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

export default Services;
