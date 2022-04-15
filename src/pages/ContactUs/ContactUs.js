import emailjs from "@emailjs/browser";
import { Button, TextField } from "@mui/material";
import React from "react";
import AppBar from "../Shared/AppBar/AppBar";
import Footer from "../Shared/Footer/Footer";
import "./ContactUs.css";

const ContactUs = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "easyrent",
        "template_q7918ab",
        e.target,
        "user_aPUqjbrWYbXRwQnxGCYu1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="">
      <AppBar></AppBar>
      <div className="contact">
        <form onSubmit={sendEmail}>
          <div className="contact-box">
            <div className="left"></div>
            <div className="right">
              <h2 className="toptext">Contact Us</h2>
              <input
                type="text"
                className="field"
                placeholder="Your Name"
                name="name"
                required
              />
              <input
                type="email"
                className="field"
                placeholder="Your Email"
                name="email"
                required
              />
              <input
                type="text"
                className="field"
                placeholder="Subject"
                name="subject"
                required
              />
              <textarea
                placeholder="Your Message"
                name="message"
                className="field"
                required
              ></textarea>
              <button className="btn1" type="submit" value="send message">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
