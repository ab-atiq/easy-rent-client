import emailjs from '@emailjs/browser';
import { Button, TextField } from '@mui/material';
import React from 'react';
import Appbar from '../Shared/Appbar/Appbar';
import Footer from '../Shared/Footer/Footer';
import './ContactUs.css';

const ContactUs = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('easyrent', 'template_q7918ab', e.target, 'user_aPUqjbrWYbXRwQnxGCYu1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className="">
            <Appbar></Appbar>
            <div className='main'>

                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <TextField style={{
                                backgroundColor: "white"
                            }}
                                type="text" className="form-control" placeholder="Name" name="name"

                                required
                            />
                        </div>
                        <div className="col-8 pt-2 form-group mx-auto">
                            <TextField style={{
                                backgroundColor: "white"
                            }}
                                type="email" className="form-control" placeholder="Email Address" name="email"
                                required
                            />
                        </div>
                        <div className="col-8 pt-2 form-group mx-auto">
                            <TextField style={{
                                backgroundColor: "white"
                            }}
                                type="text" className="form-control" placeholder="Subject" name="subject"
                                required
                            />
                        </div>
                        <div className="col-8 pt-2 form-group mx-auto">
                            <textarea className="form-control"
                                cols="32"
                                rows="8"
                                placeholder="Your Message" name="message"
                                required
                            />
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <Button style={{
                                borderRadius: 35,
                                backgroundColor: "#FDAF7E",
                                padding: "4px 8px",
                                fontSize: "30px"
                            }}
                                type="submit"
                                variant="contained"
                                value="send message"
                                fullWidth
                            >
                                Send
                            </Button>
                        </div>
                    </div>
                </form>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;