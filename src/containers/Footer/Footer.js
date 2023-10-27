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
    <span>
      <img src={GlobalFacebook} alt="facebook" />
    </span>
    <span>
      <img src={GlobalTwitter} alt="twitter" />
    </span>
    <span>
      <img src={GlobalPinterest} alt="pinterest" />
    </span>
    <span>
      <img src={GlobalInstagram} alt="instagram" />
    </span>
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

        <div className="footer-container-copyright">
          <span>
            <p>© 2021 Loopstudios. All rights reserved.</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
