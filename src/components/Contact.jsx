import React from 'react'
import { useState, useRef, useEffect } from 'react';
import "./Skillbar.css"
import "./Contact.css"
import {AiFillMail, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'


function Contact() {

    const [isTitleVisible, setTitleVisible] = useState(false);
    const [isSubtitleVisible, setSubtitleVisible] = useState(false);
    const [isIconVisible, setIconVisible] = useState(false);
    const domRefTitle = useRef();
    const domRefSubtitle = useRef();
    const domRefIcon = useRef();

    useEffect(() => { 

        const titleObserver = new IntersectionObserver((entries) => {
            setTitleVisible(entries[0].isIntersecting)
            if(entries[0].isIntersecting){
                titleObserver.unobserve(domRefTitle.current)
            }
        })
        titleObserver.observe(domRefTitle.current)

        const subtitleObserver = new IntersectionObserver((entries) => {
            setSubtitleVisible(entries[0].isIntersecting)
            if(entries[0].isIntersecting){
                subtitleObserver.unobserve(domRefSubtitle.current)
            }
        })
        subtitleObserver.observe(domRefSubtitle.current)

        const iconObserver = new IntersectionObserver((entries) => {
            setIconVisible(entries[0].isIntersecting)
            if(entries[0].isIntersecting){
                iconObserver.unobserve(domRefIcon.current)
            }
        })
        iconObserver.observe(domRefIcon.current)


    }, [isTitleVisible])

  return (
    <>
    
        <h1 className={`skillsTitle ${isTitleVisible}`} ref={domRefTitle}>Contact Me</h1>
        <h3 className={`skillsSubTitle ${isSubtitleVisible}`} ref={domRefSubtitle}>Below you will find ways to contact me </h3>

        <div className="contactBox">

            
            <a href="mailto:mohsinrehmaninfo@gmail.com" ref={domRefIcon} className={`mailIcon ${isIconVisible}`}> <AiFillMail></AiFillMail> </a>

            


            <a href="https://github.com/MohsinRehman12" ref={domRefIcon} className={`mailIcon ${isIconVisible}`}> <AiFillGithub/> </a>

            


            <a href="https://www.linkedin.com/in/mohsin-rehman-502b33262/" ref={domRefIcon} className={`mailIcon ${isIconVisible}`}> <AiFillLinkedin /> </a>

            

            
        </div>




    </>
  )
}

export default Contact