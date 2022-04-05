import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Service from "./Service";


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
    image: "https://i.ibb.co/zsTVG2N/vehicle-1.png",
    name: "Car 9",
    price: "1500",
    discountPrice: "800",
    details:
      "\nAssociate Medical Director, Center for Bioengineering Innovation and Design, Department of Biomedical Engineering\nAssistant Professor of Medicine",
  },
  {
    _id: "10",
    image: "https://i.ibb.co/WGP14g0/vehicle-3.png",
    name: "Car 10",
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
      <Box sx={{textAlign:'center', fontSize: '3.5rem'}}> Our services</Box>
      <Container fixed>
      {data.map((serviceP) => (
        <Service  key={serviceP._id} service={serviceP}>
         
        </Service>
      ))}
        </Container>
    </div>
  );
};

export default Services;
