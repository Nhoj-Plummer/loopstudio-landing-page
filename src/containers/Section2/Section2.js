import React, {useState, useEffect} from "react"
import "./Section2.css"
import {Creation} from "../../components/componentsindex"
import {DesktopEarth, DesktopArcade, DesktopSoccer, DesktopCar, DesktopRoad, DesktopBorealis, DesktopRover, DesktopFishEye} from "../../assets/desktop/indexdesktop"
import {MobileEarth, MobileArcade, MobileSoccer, MobileCar, MobileRoad, MobileBorealis, MobileRover, MobileFishEye} from "../../assets/mobile/indexmobile"

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
  const graphicStyle2 = {backgroundImage: width > 540 ? `url(${DesktopArcade})` : `url(${MobileArcade})`}
  const graphicStyle3 = {backgroundImage: width > 540 ? `url(${DesktopSoccer})` : `url(${MobileSoccer})`}
  const graphicStyle4 = {backgroundImage: width > 540 ? `url(${DesktopCar})` : `url(${MobileCar})`}
  const graphicStyle5 = {backgroundImage: width > 540 ? `url(${DesktopRoad})` : `url(${MobileRoad})`}
  const graphicStyle6 = {backgroundImage: width > 540 ? `url(${DesktopBorealis})` : `url(${MobileBorealis})`}
  const graphicStyle7 = {backgroundImage: width > 540 ? `url(${DesktopRover})` : `url(${MobileRover})`}
  const graphicStyle8 = {backgroundImage: width > 540 ? `url(${DesktopFishEye})` : `url(${MobileFishEye})`}

  // Specific Component Styling
  const textStyle1Car = {width: width > 540 ? "25%" : "20%"}

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
        <Creation imageStyle={graphicStyle2} text={"NIGHT ARCADE"} />
        <Creation imageStyle={graphicStyle3} text={"SOCCER TEAM VR"} />
        <Creation imageStyle={graphicStyle4} text={`THE GRID`} textStyle={textStyle1Car} />
        <Creation imageStyle={graphicStyle5} text={"FROM UP ABOVE VR"} />
        <Creation imageStyle={graphicStyle6} text={"POCKET BOREALIS"} />
        <Creation imageStyle={graphicStyle7} text={"THE CURIOSITY"} />
        <Creation imageStyle={graphicStyle8} text={"MAKE IT FISHEYE"} />
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
