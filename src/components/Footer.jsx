import React from "react";
import "../components/css/footer.css";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="logo-cover">
          <div className="logo">
            <p>Bandage</p>
            <div className="footer-icon">
              <FaFacebook />
              <FaInstagram />
              <IoLogoTwitter />
              <AiOutlineYoutube />
            </div>
          </div>
        </div>
        <div className="footer-wrap">
          <div className="footer-txt-wrapper">
            <div>
              <h4>Company Info</h4>
              <a href="#">
                <p> About Us</p>
              </a>
              <a href="#">
                <p>Carrier</p>
              </a>
              <a href="#">
                <p>We are hiring</p>
              </a>
              <a href="#">
                <p>Blog</p>
              </a>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="#">
                <p> About Us</p>
              </a>
              <a href="#">
                <p>Carrier</p>
              </a>
              <a href="#">
                <p>We are hiring</p>
              </a>
              <a href="#">
                <p>Blog</p>
              </a>
            </div>
            <div>
              <h4>Features</h4>
              <a href="">
                <p>Business Marketing</p>
              </a>
              <a href="#">
                <p>User Analytic</p>
              </a>
              <a href="#">
                <p>Live Chat</p>
              </a>
              <a href="#">
                <p>Unlimited Support</p>
              </a>
            </div>
            <div>
              <h4>Resources</h4>
              <a href="#">
                <p>IOS and Andriod</p>
              </a>
              <a href="#">
                <p>Watch a Demo</p>
              </a>
              <a href="#">
                <p>Customers</p>
              </a>
              <a href="#">
              
                <p>API</p>
              </a>
            </div>
          </div>
          <div>
            <div className="input-wrap">
              <h4>Get in Touch</h4>
              <div className="input">
                <input type="email" placeholder="Your Email" />
                <button>Subscribe</button>
              </div>
              <p>Lore imp sum dolor Amit</p>
            </div>
          </div>
        </div>
        <div className="cover-p">
          <div className="paragrph">
            <p>Made With Love By Finland All Right Reserved </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
