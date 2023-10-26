import React, {useState, useEffect} from "react"
import "./Section2.css"
import {Creation} from "../../components/componentsindex"
import {DesktopEarth} from "../../assets/desktop/indexdesktop"
import {MobileEarth, MobileArcade, MobileSoccer, MobileCar, MobileRoad } from "../../assets/mobile/indexmobile"

function getWindowDimensions() {
  const {innerWidth: width, innerHeight: height} = window
  return {
    width,
    height
  }
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}

const Section2 = () => {
  const {width} = useWindowDimensions()

  const graphicStyle1 = {backgroundImage: width > 540 ? `url(${DesktopEarth})` : `url(${MobileEarth})`}

  return (
    <div className="section2-container">
      <div className="section2-container_text">
        <h1>OUR CREATIONS</h1>
        <div className="section2-container-button desktop">
          <button>
            <h2>SEE ALL</h2>
          </button>
        </div>
      </div>
      <div className="section2-container-creations">
        <Creation imageStyle={graphicStyle1} text={"DEEP EARTH"} />
      </div>

      <div className="section2-container-button mobile">
        <button>
          <h2>SEE ALL</h2>
        </button>
      </div>
    </div>
  )
}

export default Section2
