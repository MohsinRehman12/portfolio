import React from 'react'
import "./Banner.css"
import { useEffect, useRef, useState } from 'react';
import Wave from 'react-wavify'
export default function Banner() {

  const bannerRef = useRef();
  const [visibleBanner, setVisibileBanner] = useState(false)
  
  

  useEffect(() => { 

    const observer = new IntersectionObserver((entries) => {
        setVisibileBanner(entries[0].isIntersecting) 
      if(entries[0].isIntersecting){
        observer.unobserve(bannerRef.current)

      }
      
    })
    observer.observe(bannerRef.current)
    
  }, [visibleBanner])
  


  return (
    <>
    <div className={"banner"+visibleBanner} ref={bannerRef}>

        <h1 className="bannerText">Mohsin Rehman</h1>
        <h3 className="bannerText2">Software Developer</h3>
        <button className="headerButton">Resume</button>
        <Wave classname={"wavefill"+visibleBanner} fill='#121111'
        paused={false}
        options={{
          height: 10,
          amplitude: 40,
          speed: 0.2,
          points: 3
        }}
  />

    </div>
    
  </>
    
  )
}
