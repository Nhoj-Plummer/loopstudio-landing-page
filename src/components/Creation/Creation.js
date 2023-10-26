import React from "react"
import "./Creation.css"

const Creation = ({imageStyle, text, textStyle}) => {
  return (
    <div className="creation-container">
      <div className="creation-image" style={imageStyle}>
        <div className="creation-card-overlay">
          <div className="creation-text" style={textStyle}>
            <h1>{text}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Creation
