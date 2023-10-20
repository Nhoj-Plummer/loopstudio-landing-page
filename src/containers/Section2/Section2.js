import React, {useState, useEffect} from "react"
import "./Section2.css"
import {Creation} from "../../components/componentsindex"
import {DesktopRoad} from "../../assets/desktop/indexdesktop"
import {MobileRoad} from "../../assets/mobile/indexmobile"

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

  const image = "https://media.geeksforgeeks.org/wp-content/uploads/rk.png"

  const graphicStyle1 = {backgroundImage: `url(${image})`}

  return (
    <div className="section2-container">
      <Creation imageStyle={graphicStyle1} />
    </div>
  )
}

export default Section2
