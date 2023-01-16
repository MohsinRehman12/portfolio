import React from 'react'
import "./About.css"
import aboutImg from '../assets/memoji.jpg'


export default function About() {
  return (
      <>

      <div className="aboutContainer section" id='About'>
        <h4   className="aboutHeader">
            About Me
        </h4>
        <div className="headerSeperator"></div>


      
        <div className="aboutInfo">
        <img className="aboutImg" src={aboutImg} alt="aboutImg" />
        <p className="aboutText"> 
        I am a third year software engineering student at Ontario Tech University with aspirations of becoming a Full-Stack devoloper. Im passionate about designing and developing projects, and tackling problems whether they may be in the form of errors and bugs. 
        I can adapt and learn about new environements and problems associated with them very quickly. Im continously looking for new opportunities to learn and grow as a developer.
        </p>
      </div>

      </div>
      
      </>  
)
}
