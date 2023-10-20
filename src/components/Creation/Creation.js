import React from "react"
import "./Creation.css"

const Creation = ({imageStyle}) => {
  return (
    <div className="creation-container">
      <div className="creation-image" style={imageStyle}>
        <div className="creation-text"></div>
      </div>
    </div>
  )
}

export default Creation
