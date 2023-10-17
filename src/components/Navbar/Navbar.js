import React, {useState} from "react"
import "./Navbar.css"
import {GlobalLogo, GlobalClose, GlobalHamburger} from "../../assets/indexglobal"

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

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true)

  return (
    <div className="navbar-container">
      <div className="navbar-image-container">
        <img src={GlobalLogo} alt="logo" />
      </div>

      <div className="navbar-desktop-container"></div>

      <div className="navbar-mobile-container">
        <div className="navbar-mobile-toggle">{toggleMenu ? <img src={GlobalHamburger} alt="off" onClick={() => setToggleMenu(false)} /> : <img src={GlobalClose} alt="on" onClick={() => setToggleMenu(true)} />}</div>
        <div className="navbar-mobile-menu">
          <Menu />
        </div>
      </div>
    </div>
  )
}

export default Navbar
