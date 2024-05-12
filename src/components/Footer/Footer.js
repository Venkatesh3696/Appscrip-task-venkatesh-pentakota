import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="first-container">
        <div>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from metta mouse </p>
          <div>
            <input type="text" placeholder="Email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div>
          <h2>CONTACT US</h2>
          <p>+91 9874561230</p>
          <p>custtomercare@met.com</p>
          <h2>CURRENCY</h2>
        </div>
      </div>
      <hr />
      <div className="second-container">
        <div>
          <h2>Metta muse</h2>
          <p>About Us</p>
          <p>Stories</p>
          <p>Arstians</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Complainances Docs</p>
        </div>

        <div>
          <h2>Orders & Shipping</h2>
          <p>Join/login as Seller</p>
          <p>Payment & pricing </p>
          <p>Return & refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div>
          <h2>FOLLOW US</h2>
          <div>
            <FaInstagram />
            <CiLinkedin />
          </div>
          <p>metta muse ACCEPTS</p>
          <img src="payments.png" alt="payments" className="payments-image" />
        </div>
      </div>
      <p className="copyright">
        Copyright©2023 mettamuse. All rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
