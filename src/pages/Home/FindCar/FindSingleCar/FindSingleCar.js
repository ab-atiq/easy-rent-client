import {
  Grid,
  Typography,
  Container,
  Button,
  Modal,
  Box,
  Divider,
  TextField,
  Stack,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar, AiFillCar, FaGasPump } from "react-icons/ai";
import { GiAchievement } from "react-icons/gi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// icons
import { FaDoorOpen } from "react-icons/fa";
import { FcKey, FcAutomotive, FcFilmReel } from "react-icons/fc";
import { BiGasPump } from "react-icons/bi";
import { MdEventSeat } from "react-icons/md";
import {
  MdPublishedWithChanges,
  MdSettingsBluetooth,
  MdSupport,
  MdUsb,
  MdCameraAlt,
  MdCable,
  MdPinDrop,
  MdAudiotrack,
} from "react-icons/md";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import Appbar from "../../../Shared/Appbar/Appbar";
import ReviewSingleCar from "./ReviewSingleCar";
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import ResponsiveDatePickers from "./DatePicker";
import useAuth from "../../../../hooks/useAuth";
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const FindSingleCar = () => {
  const { carName } = useParams();
  const [startValue, setStartValue] = useState(new Date());
  const [endValue, setEndValue] = useState(new Date());
  const [rent, setRent] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { user } = useAuth();
  const startDate = startValue.toLocaleDateString();
  const endDate = endValue.toLocaleDateString();
  console.log(startDate, endDate);

  useEffect(() => {
    fetch("https://guarded-taiga-13015.herokuapp.com/api/find/findBrand")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const filterCar = data.filter((data) => data.name.includes(carName));
        console.log(filterCar[0]);
        setRent(filterCar[0].rent);
      });
  }, []);

  const initialInfo = {
    name: user.displayName,
    email: user.email,
    startDate,
    endDate,
    rent: rent,
  };
  console.log(initialInfo);

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
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://images.turo.com/media/vehicle/images/KbS38WweSM-w_IaNy6inTQ.1440x700.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.turo.com/media/vehicle/images/KbS38WweSM-w_IaNy6inTQ.1440x700.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.turo.com/media/vehicle/images/KbS38WweSM-w_IaNy6inTQ.1440x700.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.turo.com/media/vehicle/images/KbS38WweSM-w_IaNy6inTQ.1440x700.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.turo.com/media/vehicle/images/KbS38WweSM-w_IaNy6inTQ.1440x700.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <Container>
        <Grid container>
          <Grid item xs={8}>
            <Grid container sx={{ my: 2 }}>
              <Grid item>
                <Typography variant="h6">
                  5 <AiFillStar /> (50 trips)
                </Typography>
                <Grid container>
                  <Grid item>
                    <AiFillCar /> 28MPG
                    <br />
                    <FaDoorOpen /> 4 Doors
                  </Grid>
                  <Grid item>
                    <BiGasPump /> Gas(Premium)
                    <br />
                    <MdEventSeat /> 4 seats
                  </Grid>
                  <Grid item></Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid item>
                <Typography variant="h4" fontWeight="bold">
                  Hosted By
                </Typography>
                <img
                  style={{ borderRadius: "50%" }}
                  src="https://images.turo.com/media/driver/HxO8KM_gSE2MTn-PK00LCw.160x160.jpg"
                  alt=""
                />
              </Grid>
              <Grid item px={2}>
                <Typography variant="h4">Oleg</Typography>
                <GiAchievement /> All-Star Host
                <br /> 200 trips, Join Oct 2018 Host
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <GiAchievement /> All-Star Hosts All-Star Hosts are the most
                  experienced and responsive hosts on Turo.
                  <Button onClick={handleOpen}>See more...</Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <img
                        style={{ width: "100%" }}
                        src="https://images.turo.com/media/vehicle/images/KbS38WweSM-w_IaNy6inTQ.1440x700.jpg"
                        alt=""
                      />
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Best Service
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        All-Star Hosts All-Star Hosts are the most experienced
                        and responsive hosts on Turo. These outstanding hosts
                        have completed at least 10 trips in the last year, and
                        consistently go the extra mile, earning excellent
                        reviews from guests.
                      </Typography>
                    </Box>
                  </Modal>
                </Typography>
                <Typography variant="body1">
                  <GiAchievement /> All-Star Hosts All-Star Hosts are the most
                  experienced and responsive hosts on Turo.
                  <Button onClick={handleOpen}>See more...</Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <img
                        style={{ width: "100%" }}
                        src="https://images.turo.com/media/vehicle/images/KbS38WweSM-w_IaNy6inTQ.1440x700.jpg"
                        alt=""
                      />
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Best Service
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        All-Star Hosts All-Star Hosts are the most experienced
                        and responsive hosts on Turo. These outstanding hosts
                        have completed at least 10 trips in the last year, and
                        consistently go the extra mile, earning excellent
                        reviews from guests.
                      </Typography>
                    </Box>
                  </Modal>
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="h4" sx={{ py: 2, fontWeight: "bold" }}>
              Description
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              eaque corporis dignissimos perferendis cupiditate dolor doloremque
              at modi libero quidem pariatur ad ratione corrupti et sit natus
              necessitatibus dicta fugit animi quam voluptatum vel. Temporibus
              nemo veniam mollitia hic, ratione reprehenderit iusto nulla,
              quibusdam dolorem ipsam eaque asperiores facere illum assumenda
              deleniti culpa consequatur similique corrupti eveniet
              exercitationem autem voluptatem accusamus laboriosam? Modi numquam
              vero laudantium eius sunt obcaecati ratione, porro quia recusandae
              esse error architecto dignissimos voluptas! Explicabo labore omnis
              iusto iste eligendi porro adipisci consequuntur ratione
              repudiandae, dolorum odit incidunt esse est error repellendus
              magni ut voluptatem. Iure.
            </Typography>
            <Typography variant="h4" sx={{ py: 2, fontWeight: "bold" }}>
              Features
            </Typography>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h6">
                  <MdSupport /> Must be 21+ to book
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">
                  <MdPublishedWithChanges /> Android Auto
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">
                  <MdAudiotrack /> AUX input
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">
                  <AiFillCar /> Blind spot warning
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">
                  <MdPinDrop /> GPS
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">
                  <AiFillCar /> Keyless entry
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">
                  <AiFillCar /> Toll pass
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">
                  <MdUsb /> USB input
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">
                  <FcAutomotive /> Automatic transmission
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">
                  <AiFillCar /> Apple CarPlay
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">
                  <MdCameraAlt /> Backup camera
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">
                  <MdSettingsBluetooth /> Bluetooth
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">
                  <FcFilmReel /> Heated seats
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">
                  <FcKey /> Key less
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">
                  <MdCable /> USB charger
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="h4" sx={{ py: 2, fontWeight: "bold" }}>
              Guidelines
            </Typography>
            <Typography variant="body1">
              Please note, all of our vehicles are not pet-friendly. A violation
              fee will be applied if you transport a pet without permission.
            </Typography>

            <Typography variant="h4" py={2} fontWeight="bold">
              Rating and Reviews
            </Typography>
            <Grid container alignItems="center">
              <Grid item>
                <img
                  style={{ borderRadius: "50%" }}
                  src="https://images.turo.com/media/driver/HxO8KM_gSE2MTn-PK00LCw.160x160.jpg"
                  alt=""
                />
              </Grid>
              <Grid item pl={3}>
                <Typography variant="h5">
                  5 <AiFillStar /> chaitanya apr 12, 2022
                </Typography>
                <Typography variant="body1">
                  Great host and great car!
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="h4" sx={{ py: 2, fontWeight: "bold" }}>
              Give Feedback
            </Typography>
            {/* Feedback comment */}
            <ReviewSingleCar />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h4">Rent Here</Typography>
            <Typography variant="h5">US $172/Day</Typography>
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
            <Typography textAlign="center" py={2}>
              <Button onClick={() => rentNow()}>Rent Now</Button>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FindSingleCar;
