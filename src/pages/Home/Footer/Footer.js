import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            Easy <span>Rent</span>
          </h3>

          <p class="footer-links">
            <a href="#">Home</a>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p class="footer-company-name">Easy Rent &copy; 2022</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>200 Revolution Street Dhaka</span> Dhaka , Bangladesh
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+18834384933</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">teamdevager21@gmail.com </a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            We Provide New Generataion Car for Rent (Easy Rent) .
          </p>

          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
