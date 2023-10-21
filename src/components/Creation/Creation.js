import React from "react"
import "./Creation.css"

const Creation = ({imageStyle, text}) => {
  return (
    <div className="creation-container">
      <div className="creation-image" style={imageStyle}>
        <div className="creation-text">
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  )
}

export default Creation
