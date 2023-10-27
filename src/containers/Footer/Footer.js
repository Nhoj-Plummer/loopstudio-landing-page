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

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container_images">
        <img src={GlobalLogo} alt="logo" />
        <div className="footer-container-socials desktop">
          <img src={GlobalFacebook} alt="" />
          <img src={GlobalTwitter} alt="" />
          <img src={GlobalPinterest} alt="" />
          <img src={GlobalInstagram} alt="" />
        </div>
      </div>

      <div className="footer-container-text">
        <Menu />
        <div className="footer-container-socials mobile">
          <img src={GlobalFacebook} alt="" />
          <img src={GlobalTwitter} alt="" />
          <img src={GlobalPinterest} alt="" />
          <img src={GlobalInstagram} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
