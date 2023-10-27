import React from "react"
import "./Footer.css"
import {GlobalLogo, GlobalFacebook, GlobalTwitter, GlobalPinterest, GlobalInstagram} from "../../assets/indexglobal"

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
    </div>
  )
}

export default Footer
