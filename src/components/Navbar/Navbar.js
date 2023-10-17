import React from "react"
import "./Navbar.css"
import {GlobalLogo} from "../../assets/indexglobal"

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-image-container">
        <img src={GlobalLogo} alt="logo" />
      </div>
    </div>
  )
}

export default Navbar
