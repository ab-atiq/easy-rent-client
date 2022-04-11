import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Service from "./Service";
import "./Services.css";

const data = [
  {
    _id: "1",
    car_name:"HIACE MICRO BUS ",
    image: "https://i.ibb.co/9gdJrdP/OIP-removebg-preview.png",
    name: "Rent Hiace Micro Bus New Shape: (Model 2008 to 2012)",
    monthly_price: "65,000",
    price_daily:"4000",
    model:"2003 to 2005",
    Ac:"Yes",
    fuel:"CNG, Petrol",
   condition: "Fresh, Super Cool AC",
   available:"Hourly, Daily and Monthly basis",
  daily_rent:
      "Dhaka Metro BDT 3500 to 4000 and out side Dhaka BDT 4000 to 4500 (Depend on the distance) Rental rates are excluding other cost e.g fuel, toll, food and tour allowance Monthly Rent: BDT 65,000 to 70,000 (Excluding all charges)",
   details: "In our fleet we have a large number of hiace micro bus. If you need a new one please call us at any time. Hiace is a popular Miccrobus for family and official trip. Day by day people of Bangladesh are for familier with Hiace Micro Bus and good service of the vehicle. Theis is 5th generation Micro Bus.In our fleet we have  7, 8, 12 and 15 seated Micro bus for rent. For your car rental solution you can choose us because we have the largest fleet of cars in Bangladesh. We are ready to provide service 7/24 hours."   
  },
  {
    _id: "2",
    car_name:"Toyota Pemio ",
    image: "https://i.ibb.co/y4T7Hkj/Toyota-PREMIO-1-5-F-L-Package-removebg-preview.png",
    name: "Toyota Pemio(Model 2007 To 2015)",
    monthly_price: "60,000",
    price_daily:"4000",
    model:"2000 to 2006",
    passenger:"4+1=5",
    phone:"+88 0171130655",
    fuel:"Petrol/CNG.",
    Ac:"Yes",
   condition: "Fully Fresh, Super Cool AC.",
   available:"Hourly, Daily and Monthly basis",
  daily_rent:
      " Dhaka Metro  BDT 3500 to 4000 and out side Dhaka BDT 4000 to 4500 (Depend on distance), Rental rates are excluding other cost e.g. fuel, toll, food and tour allowance",
   details: "In our car rental fleet we have luxurious car e.g. premio. At any tome you can hire it and go any where in Bangladesh. We serve our customer 7/24 hours in a week. Both the allion and premio are introduced in the same time.According to the feature condition premio is very much luxurious and prestigious. We are very near to to ensure your interrupted service in 7/24hr. (n)"   
  },
  {
    _id: "3",
    car_name:"PICK UP ",
    image: "https://i.ibb.co/42spZ9f/tata-ace-gold-500x500.png",
    name: "Mini Truck, Pick up van",
    monthly_price: "contact us",
    price_daily:"8000",
    model:"Mini Truck, Pick Up",
    passenger:"2+1=3",
    phone:"+88 01711306557",
    fuel:"Diesel or CNG",
    Ac:"No",
   condition: "Fresh",
   available:"Hourly, Daily and Monthly basis",
  daily_rent:
      " For details, contact us",
   details: "Zoom Rent a car in Dhaka in our fleet we have a large number and size of Puck up for rent. As per your need zoom car rentals Bangladesh will give the best one. We have the pickup rental specialist  who can help you to find a suitable pick up. We have a large collection of Toyota, Nissan, Mitshubishi, so that you can call us and find your suitable vehicle.Our all pickups are four wheeler and we mentain it regularly and also check performance. You can use our vehicle for commercial purpose. The pickups are double cabin or single cabin. You can also use it in your family purpose."   
  },
  {
    _id: "4",
    car_name:"X NOAH",
    image: "https://i.ibb.co/gjz0t4s/2018-Toyota-Noah-X-facelift-removebg-preview.png",
    name: "X Noah (2007 – 2014)",
    monthly_price: "BDT. 60,000 (Excluding all)",
    price_daily:"7,000 ",
    model:"2007 – 2014",
    passenger:" 6 +1=7",
    phone:"+880154612411",
    fuel:"Diesel/CNG",
    Ac:"Yes, Super Cool AC",
   condition: " Fully Fresh",
   available:"Hourly / Daily / Monthly basis",
  daily_rent:
      "  Dhaka Metro City BDT 3000 to 4000 and out side Dhaka BDT 4000 to 5000 (Depend on the distance) Rental rates are excluding other cost  e.g. fuel, toll, food and tour allowance.",
   details: "Zoom Rent A Car has the large number of X Noah collection for rent. Our Office is in Mirpur, Dhaka. You can visit our office and rent which one you like. We are 24 hours open to serve you. In the fleet of Zoom Car Rentals we have a large number of X Noah for rent. This is the 8 seated micro bus. It has 2 version X Noah and Voxy.[The Noah’s 154 hp engine takes 9.8 seconds to reach 100 km/h (60 mph) up to a top speed of 175 km/h. It also has a smoother ride and better handling than the last generation Noah] "   
  },
  {
    _id: "5",
    car_name:"TOURIST BUS/MINI BUS",
    image: "https://i.ibb.co/drWxPb7/rent-a-car-Bangladesh-tourist-bus-hire-removebg-preview.png",
    name: "Tourist Bus/Mini Bus Hire (We serve Across the Country of Bangladesh)",
    monthly_price: "BDT 2,45,000",
    price_daily:"18000 ",
    model:"",
    passenger:" ",
    phone:"+880574612411",
    fuel:"Diesel/CNG",
    Ac:"Yes, Super Cool AC",
   condition: " Fully Fresh",
   available:"Hourly / Daily / Monthly basis",
  daily_rent:
      "  In our car rental fleet we have different types of minibus or tourist bus for rent in Bangladesh. We are the easy and affordable rent a car service in Dhaka, Bangladesh. If you are thinking about AC tourist bus or mini bus rent in Bangladesh Zoom rent a car will provide you the best car rental solution in Bangladesh. We will give you extra discount if you rent a car from us, such a discount you will not net in Bangladesh from other car rental companies. We are the best transport and car rental solution provider in Bangladesh.",
   details: "It is easy to hire Tourist bus or mini bus from Zoom Rent A Car Bangladesh. We have 18, 26, 32 and 52 seated luxurious minibus for rent. Per day body rent range would be BDT 10,000 to 15,000. You can rent mini bus from us and go anywhere in Bangladesh in 24/7. We suggest you to book our bus minimum one week before your travel date."   
  },
  {
    _id: "6",
    car_name:"TRUCK HIRE/TRUCK RENT",
    image: "https://i.ibb.co/LgGwBMk/zoom-rent-a-car-Dhaka-truck-hire-1-removebg-preview.png",
    name: "Truck Rent in Bangladesh  ",
    monthly_price: "BDT 2,45,000",
    price_daily:"contact us",
    model:"TRUCK",
    passenger:" 2+1=3 ",
    phone:"+88 01711306557  ",
    fuel:"Diesel",
    Ac:"No",
   condition: "  Fresh",
   available:"Hourly / Daily / Monthly basis",
  daily_rent:
      "  For details, contact us",
   details: "IIn our rent a car fleet we have plenty of trucks for rent. In your call we can go every where in Bangladesh at any time. Just call us for rent. If you hire truck from us you will get competitive price.In our fleet we have 100 of trucks to provide you service. For carry the goods e.g. bricks, sands, cement, road, furniture, household goods etc. you can rent trucks from us.We move all over Bangladesh to carry your goods safely. We have 1 ton, 2 ton, 3 ton, 5, ton, 7 ton even 10 ton trucks carry your materials . It is easy to book trucks from Zoom Rent A Car because you just make us call and we will arrange everything for you."   
  },

  
];

const AllServices = () => {
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch(All_data)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [services]);

  return (
    <div>
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
