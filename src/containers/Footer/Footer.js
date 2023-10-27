import React from "react"
import "./Footer.css"
import {GlobalLogo, GlobalFacebook, GlobalTwitter, GlobalPinterest, GlobalInstagram} from "../../assets/indexglobal"

const Menu = () => (
  <>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#careers">Careers</a>
    </p>
    <p>
      <a href="#events">Events</a>
    </p>
    <p>
      <a href="#products">Products</a>
    </p>
    <p>
      <a href="#support">Support</a>
    </p>
  </>
)

const Socials = () => (
  <>
    {" "}
    <img src={GlobalFacebook} alt="facebook" />
    <img src={GlobalTwitter} alt="twitter" />
    <img src={GlobalPinterest} alt="pinterest" />
    <img src={GlobalInstagram} alt="instagram" />
  </>
)

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container_images">
        <img src={GlobalLogo} alt="logo" />
        <div className="footer-container-socials desktop">
          <Socials />
        </div>
      </div>

      <div className="footer-container-text">
        <div className="footer-container-menu">
          <Menu />
        </div>

        <div className="footer-container-socials mobile">
          <Socials />
        </div>
      </div>
    </div>
  )
}

export default Footer
