import React from "react"
import "./HeroSection.css"
import {Navbar} from "../../components/componentsindex"

const HeroSection = () => {
  return (
    <div className="hero-section_container">
      <div className="hero-section_image">
        <Navbar />
        <div className="hero-section_text">
          <h1>IMMERSIVE EXPERIENCES THAT DELIVER </h1>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
