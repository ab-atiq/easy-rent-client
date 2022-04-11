import { Container} from "@mui/material";
import Grid from '@mui/material/Grid';
import React from "react";
import Service from "./Service";
import "./Services.css";

const data = [
  {
    _id: "1",
    image: "https://i.ibb.co/QcJFyn2/car-6.png",
    year: 2015,
    name: "Ford F-150",
    price: "150",
    kilo: 20,
    type: 'Auto',
    fual: 'Diesel',
    discountPrice: "800",
    details:
      "\nAssociate Medical Director, Center for Bioengineering Innovation and Design, Department of Biomedical Engineering\nAssistant Professor of Medicine",
  },
  {
    _id: "2",
    image: "https://i.ibb.co/VtksqQw/car-2.png",
    year: 2017,
    name: "Land Rover",
    price: "180",
    kilo: 30,
    type: 'Auto',
    fual: 'Diesel',
    discountPrice: "800",
    details:
      "\nAssociate Medical Director, Center for Bioengineering Innovation and Design, Department of Biomedical Engineering\nAssistant Professor of Medicine",
  },
  {
    _id: "3",
    image: "https://i.ibb.co/GWjjP4N/car-3.png",
    year: 2014,
    name: "Chrysler 200",
    price: "120",
    kilo: 20,
    type: 'Auto',
    fual: 'Diesel',
    discountPrice: "800",
    details:
      "\nAssociate Medical Director, Center for Bioengineering Innovation and Design, Department of Biomedical Engineering\nAssistant Professor of Medicine",
  },
  {
    _id: "4",
    image: "https://i.ibb.co/LvHvdMS/car-8.png",
    year: 2019,
    name: "Kia Sorento",
    price: "140",
    kilo: 40,
    type: 'Auto',
    fual: 'Diesel',
    discountPrice: "800",
    details:
      "\nAssociate Medical Director, Center for Bioengineering Innovation and Design, Department of Biomedical Engineering\nAssistant Professor of Medicine",
  },
  {
    _id: "5",
    image: "https://i.ibb.co/gj8pYLk/car-5.png",
    year: 2012,
    name: "Subaru Legacy",
    price: "110",
    kilo: 35,
    type: 'Auto',
    fual: 'Diesel',
    discountPrice: "800",
    details:
      "\nAssociate Medical Director, Center for Bioengineering Innovation and Design, Department of Biomedical Engineering\nAssistant Professor of Medicine",
  },
  {
    _id: "6",
    image: "https://i.ibb.co/QcJFyn2/car-6.png",
    year: 2020,
    name: "Porsche Macan",
    price: "170",
    kilo: 10,
    type: 'Auto',
    fual: 'Diesel',
    discountPrice: "800",
    details:
      "\nAssociate Medical Director, Center for Bioengineering Innovation and Design, Department of Biomedical Engineering\nAssistant Professor of Medicine",
  },
  {
    _id: "7",
    image: "https://i.ibb.co/RDrG4qK/car-7.png",
    year: 2018,
    name: "Mercedes-Benz",
    price: "130",
    kilo: 25,
    type: 'Auto',
    fual: 'Diesel',
    discountPrice: "800",
    details:
      "\nAssociate Medical Director, Center for Bioengineering Innovation and Design, Department of Biomedical Engineering\nAssistant Professor of Medicine",
  },
  {
    _id: "8",
    image: "https://i.ibb.co/cJ4NWwg/car-4.png",
    year: 2016,
    name: "Volkswagen GTI",
    price: "140",
    kilo: 40,
    type: 'Auto',
    fual: 'Diesel',
    discountPrice: "800",
    details:
      "\nAssociate Medical Director, Center for Bioengineering Innovation and Design, Department of Biomedical Engineering\nAssistant Professor of Medicine",
  },
  {
    _id: "9",
    image: "https://i.ibb.co/K9pH3RG/car-1.png",
    year: 2019,
    name: "Volkswagen Golf",
    price: "120",
    kilo: 30,
    type: 'Auto',
    fual: 'Diesel',
    discountPrice: "800",
    details:
      "\nAssociate Medical Director, Center for Bioengineering Innovation and Design, Department of Biomedical Engineering\nAssistant Professor of Medicine",
  },
];

const Services = () => {
  

  return (
    <div>
      <Container>
        <h1 className='car-service-headline'>Our Services</h1>
        <Grid container spacing={{ xs: 2, md: 3, lg: 5}} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>


          {
            data.map((cardata) => <Service
            key={cardata._id}
            alldata ={cardata} 
            ></Service>  )
          }

            

        </Grid>         
      </Container>
    </div>
  );
};

export default Services;


