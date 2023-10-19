import React from "react"
import "./Section1.css"
import {MobileVR} from "../../assets/mobile/indexmobile"
import {DesktopVR} from "../../assets/desktop/indexdesktop"

const Section1 = () => {
  return (
    <div className="section1-container">
      <div className="section1-container_image">
        <picture>
          <source media="(min-width: 541px)" srcSet={DesktopVR} />
          <img src={MobileVR} alt="img" />
        </picture>
      </div>

      <div className="section1-container_text">
        <h1>THE LEADER IN INTERACTIVE VR</h1>
        <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
      </div>
    </div>
  )
}

export default Section1
