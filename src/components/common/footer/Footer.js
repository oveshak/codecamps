import React from "react";
import { footer } from "../../data/Data";
import { BiSolidSend } from "react-icons/bi";
import "./footer.css";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="footercontainer">
        <footer>
          <div className="container">
            <div className="box">
              <div className="logo">
                <img src="./images/logos.svg" alt="" />

                <p className="text">
                  At Codecamp, we're committed to making education and training
                  accessible to everyone, regardless of their financial
                  situation.
                </p>
              </div>
            </div>
            {footer.map((item, index) => (
              <div className="box" key={index}>
                <h3>{item.title}</h3>
                <ul>
                  {item.text.map((item, index) => (
                    <li key={index}>
                      <Link to={item.path}>{item.list}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="box">
              <h3>Contact Info</h3>
              <span>
                F- 468 Phase 8B Industrial Area SAS Nagar Punjab 160071
              </span>
              <p>info@smartinfocare.com</p>
              <p>+91-7986985035</p>
            </div>
            <div className="box">
              <h3>Newsletter</h3>
              <form>
                <input type="email" placeholder="Enter Email Id" />
                <button type="submit">
                  Subscribe <BiSolidSend className="icon6 icon1555" />{" "}
                </button>
              </form>
            </div>
          </div>
        </footer>
      </section>

      <div className="legal">
        <div className="container leaga">
          <div className="ti flex">
            <span>© 2023 All Rights Reserved</span>
            <div className="social">
              <FaFacebook className="icon6" />
              <FaInstagramSquare className="icon6" />
              <FaLinkedin className="icon6" />
              <FaTwitter className="icon6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
