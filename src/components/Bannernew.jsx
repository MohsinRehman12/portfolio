import React from 'react';
import './Bannernew.css';
import Button from '@mui/material/Button';
import Aboutimg from '../assets/about.png';
import { useRef, useEffect, useState } from 'react';
import fileSaver from "file-saver";

function Bannernew() {

    const title = useRef();
    const profession1 = useRef();
    const profession2 = useRef();

    const infoRef = useRef();
    const buttonResumeRef = useRef();
    const imgBackgroundEff = useRef();

    const [visibileTitle, setVisibileTitle] = useState(false)
    const [visibileProfession1, setViisibileProfession1] = useState(false)
    const [visibileProfession2, setViisibileProfession2] = useState(false)
    const [visibileButton, setViisibileButton] = useState(false)
    const [visibileInfo, setViisibileInfo] = useState(false)
    const [visibileImg, setViisibileImg] = useState(false)

    const downloadTxtFile = () => {
      fileSaver.saveAs(
        process.env.PUBLIC_URL + "/Rehman_Mohsin_Resume.pdf",
        "Mohsin_Rehman_Resume.pdf"
      );
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            setVisibileTitle(entries[0].isIntersecting) 
            if(entries[0].isIntersecting){
              observer.unobserve(title.current)
      
            }
            
          })
      
          observer.observe(title.current)

          const observer1 = new IntersectionObserver((entries) => {
            setViisibileProfession1(entries[0].isIntersecting) 
            if(entries[0].isIntersecting){
              observer1.unobserve(profession1.current)
      
            }
            
          })
      
          observer1.observe(profession1.current)
          
          const observer2 = new IntersectionObserver((entries) => {
            setViisibileProfession2(entries[0].isIntersecting) 
            if(entries[0].isIntersecting){
              observer2.unobserve(profession2.current)
      
            }
            
          })
      
          observer2.observe(profession2.current)

          const observer3 = new IntersectionObserver((entries) => {
            setViisibileInfo(entries[0].isIntersecting) 
            if(entries[0].isIntersecting){
              observer3.unobserve(infoRef.current)
      
            }
            
          })
      
          observer3.observe(infoRef.current)

          const observer4 = new IntersectionObserver((entries) => {
            setViisibileButton(entries[0].isIntersecting) 
            if(entries[0].isIntersecting){
              observer4.unobserve(buttonResumeRef.current)
      
            }
            
          })
      
          observer4.observe(buttonResumeRef.current)

          const observer5 = new IntersectionObserver((entries) => {
            setViisibileImg(entries[0].isIntersecting) 
            if(entries[0].isIntersecting){
              observer5.unobserve(imgBackgroundEff.current)
      
            }
            
          })
      
          observer5.observe(imgBackgroundEff.current)

        }, [visibileTitle])


  return (

    <div className="bannerContain">
        <div className="bannerBoxContainer">
        <div className="bannerBox">
        <h1 className= {`bannerText ${visibileTitle}`} ref={title}>Mohsin Rehman</h1>
        <h3 className={`bannerTextProf ${visibileProfession1}` } ref={profession1}>Full Stack Developer</h3>
        <h3 className={`bannerTextProf2 ${visibileProfession2}` } ref={profession2}>Software Engineer</h3>
        <div className="bannerInfoBox">
        <p className={`bannerInfoText ${visibileInfo}` } ref={infoRef}>
        I am a third year software engineering student at Ontario Tech University with aspirations of becoming a Full-Stack devoloper. Im passionate about designing and developing projects, and tackling problems whether they may be in the form of errors and bugs. I can adapt and learn about new environements and problems associated with them very quickly. Im continously looking for new opportunities to learn and grow as a developer.
        </p>
        </div>

        <div className="buttonBox">
        <Button onClick={downloadTxtFile} className={`buttonResume ${visibileButton}`} ref={buttonResumeRef} variant='outlined'>Download Resume</Button>
        </div>
        
        </div>
    </div>

    <img className={`imgBackground ${visibileImg}`} ref={imgBackgroundEff} src={Aboutimg}/>
    
    

    </div>
    
  )
}

export default Bannernew