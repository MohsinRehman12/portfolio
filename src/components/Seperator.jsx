import React from 'react'
import "./About.css"
function Seperator({name, scrollLink}) {
  return (
    <div className="aboutContainer" id={scrollLink}>
    <h4   className="aboutHeader">
        {name}
    </h4>
    <div className="headerSeperator"></div>
    </div>
  )
}

export default Seperator