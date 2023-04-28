import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import "./Skillbar.css"



function Skillsbar() {

    const [isTitleVisible, setTitleVisible] = useState(false);
    const [isTitleVisible2, setTitleVisible2] = useState(false);
    const [isSubtitleVisible, setSubtitleVisible] = useState(false);
    const [isSubtitleVisible2, setSubtitleVisible2] = useState(false);

    const [isVisible, setVisible] = useState(false);
    const [isVisible2, setVisible2] = useState(false);
    const [isVisible3, setVisible3] = useState(false);
    const [isVisible4, setVisible4] = useState(false);
    const [isVisible5, setVisible5] = useState(false);
    const [isVisible6, setVisible6] = useState(false);
    const [isVisible7, setVisible7] = useState(false);
    const [isVisible8, setVisible8] = useState(false);
    const [isVisible9, setVisible9] = useState(false);
    const [isVisible10, setVisible10] = useState(false);
    const [isVisible11, setVisible11] = useState(false);
    const [isVisible12, setVisible12] = useState(false);
    const [isVisible13, setVisible13] = useState(false);
    const [isVisible14, setVisible14] = useState(false);
    const [isVisible15, setVisible15] = useState(false);
    const [isVisible16, setVisible16] = useState(false);

    const domRef = useRef();
    const domRef2 = useRef();
    const domRef3 = useRef();
    const domRef4 = useRef();
    const domRef5 = useRef();
    const domRef6 = useRef();
    const domRef7 = useRef();
    const domRef8 = useRef();
    const domRef9 = useRef();
    const domRef10 = useRef();
    const domRef11 = useRef();
    const domRef12 = useRef();
    const domRef13 = useRef();
    const domRef14 = useRef();
    const domRef15 = useRef();
    const domRef16 = useRef();

    const domRefTitle = useRef();
    const domRefTitle2 = useRef();
    const domRefSubtitle = useRef();
    const domRefSubtitle2 = useRef();

    useEffect(() => { 

        const titleObserver = new IntersectionObserver((entries) => {
            setTitleVisible(entries[0].isIntersecting)
            if(entries[0].isIntersecting){
                titleObserver.unobserve(domRefTitle.current)
            }
        })
        titleObserver.observe(domRefTitle.current)

        const titleObserver2 = new IntersectionObserver((entries) => {
            setTitleVisible2(entries[0].isIntersecting)
            if(entries[0].isIntersecting){
                titleObserver2.unobserve(domRefTitle2.current)
            }
        })
        titleObserver2.observe(domRefTitle2.current)

        const subtitleObserver = new IntersectionObserver((entries) => {
            setSubtitleVisible(entries[0].isIntersecting)
            if(entries[0].isIntersecting){
                subtitleObserver.unobserve(domRefSubtitle.current)
            }
        })
        subtitleObserver.observe(domRefSubtitle.current)

        const subtitleObserver2 = new IntersectionObserver((entries) => {
            setSubtitleVisible2(entries[0].isIntersecting)
            if(entries[0].isIntersecting){
                subtitleObserver2.unobserve(domRefSubtitle2.current)
            }
        })
        subtitleObserver2.observe(domRefSubtitle2.current)
        

        const observer = new IntersectionObserver((entries) => {
            setVisible(entries[0].isIntersecting) 
          if(entries[0].isIntersecting){
            observer.unobserve(domRef.current)
    
          }
          
        })
        observer.observe(domRef.current)

        const observer2 = new IntersectionObserver((entries) => {
            setVisible2(entries[0].isIntersecting) 
          if(entries[0].isIntersecting){
            observer2.unobserve(domRef2.current)
    
          }
          
        })
        observer2.observe(domRef2.current)

        const observer3 = new IntersectionObserver((entries) => {
            setVisible3(entries[0].isIntersecting) 
          if(entries[0].isIntersecting){
            observer3.unobserve(domRef3.current)
    
          }
          
        }
        )
        observer3.observe(domRef3.current)

        const observer4 = new IntersectionObserver((entries) => {
            setVisible4(entries[0].isIntersecting) 
          if(entries[0].isIntersecting){
            observer4.unobserve(domRef4.current)
    
          }
          
        }
        )
        observer4.observe(domRef4.current)

        const observer5 = new IntersectionObserver((entries) => {
            setVisible5(entries[0].isIntersecting) 
          if(entries[0].isIntersecting){
            observer5.unobserve(domRef5.current)
    
          }
          
        }
        )
        observer5.observe(domRef5.current)

        const observer6 = new IntersectionObserver((entries) => {
            setVisible6(entries[0].isIntersecting) 
          if(entries[0].isIntersecting){
            observer6.unobserve(domRef6.current)
    
          }
          
        }
        )
        observer6.observe(domRef6.current)

        const observer7 = new IntersectionObserver((entries) => {
            setVisible7(entries[0].isIntersecting) 
          if(entries[0].isIntersecting){
            observer7.unobserve(domRef7.current)
    
          }
          
        }
        )
        observer7.observe(domRef7.current)

        const observer8 = new IntersectionObserver((entries) => {
            setVisible8(entries[0].isIntersecting) 
          if(entries[0].isIntersecting){
            observer8.unobserve(domRef8.current)
    
          }
          
        }
        )
        observer8.observe(domRef8.current)

        const observer9 = new IntersectionObserver((entries) => {
            setVisible9(entries[0].isIntersecting) 
          if(entries[0].isIntersecting){
            observer9.unobserve(domRef9.current)
    
          }
          
        }
        )
        observer9.observe(domRef9.current)

        const observer10 = new IntersectionObserver((entries) => {
            setVisible10(entries[0].isIntersecting) 
          if(entries[0].isIntersecting){
            observer10.unobserve(domRef10.current)
    
          }
          
        }
        )
        observer10.observe(domRef10.current)

        const observer11 = new IntersectionObserver((entries) => {
            setVisible11(entries[0].isIntersecting) 
          if(entries[0].isIntersecting){
            observer11.unobserve(domRef11.current)
    
          }
          
        }
        )
        observer11.observe(domRef11.current)

        const observer12 = new IntersectionObserver((entries) => {
            setVisible12(entries[0].isIntersecting) 
          if(entries[0].isIntersecting){
            observer12.unobserve(domRef12.current)
    
          }
          
        }
        )
        observer12.observe(domRef12.current)

        const observer13 = new IntersectionObserver((entries) => {
            setVisible13(entries[0].isIntersecting) 
          if(entries[0].isIntersecting){
            observer13.unobserve(domRef13.current)
    
          }
          
        }
        )
        observer13.observe(domRef13.current)

        const observer14 = new IntersectionObserver((entries) => {
            setVisible14(entries[0].isIntersecting) 
          if(entries[0].isIntersecting){
            observer14.unobserve(domRef14.current)
    
          }
          
        }
        )
        observer14.observe(domRef14.current)

        const observer15 = new IntersectionObserver((entries) => {
            setVisible15(entries[0].isIntersecting) 
          if(entries[0].isIntersecting){
            observer15.unobserve(domRef15.current)
    
          }
          
        }
        )
        observer15.observe(domRef15.current)

        const observer16 = new IntersectionObserver((entries) => {
            setVisible16(entries[0].isIntersecting) 
          if(entries[0].isIntersecting){
            observer16.unobserve(domRef16.current)
    
          }
          
        }
        )
        observer16.observe(domRef16.current)


    }, [isVisible])



  return (
<>
    <h1 className={`skillsTitle ${isTitleVisible}`} ref={domRefTitle}>Skills</h1>
    <h3 className={`skillsSubTitle ${isSubtitleVisible}`} ref={domRefSubtitle}>Below you will find some of the languages, framworks, and technologies im familiar with </h3>
    <Grid className='iconGrid' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid className={`itemBoxSlot ${isVisible} i1`} ref={domRef} item xs={3}>
    <Item>
    <div className="iconBox">
        <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width={60} className='iconsImg'/>
        <h3 className='iconText'>React</h3>
    </div>
    </Item>
  </Grid>
  <Grid className={`itemBoxSlot ${isVisible2} i2`} ref={domRef2}  item xs={3}>
  <Item>
    <div className="iconBox">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width={60} className='iconsImg'/>
    <h3 className='iconText'>JavaScript</h3>

    </div>
    </Item>
  </Grid>

  <Grid className={`itemBoxSlot ${isVisible3} i3`} ref={domRef3} item xs={3}>
  <Item>
    <div className="iconBox">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" width={60} className='iconsImg'/>
    <h3 className='iconText'>NodeJS</h3>

    </div>
    </Item>
  </Grid>

  <Grid className={`itemBoxSlot ${isVisible4} i4`} ref={domRef4} item xs={3}>
    <Item>
        <div className="iconBox">
        <i class="devicon-express-original"  />
        <h3 className='iconText'>ExpressJS</h3>

        </div>
    </Item>
  </Grid>

  <Grid className={`itemBoxSlot ${isVisible5} i5`} ref={domRef5} item xs={3}>
  <Item>
    <div className="iconBox">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width={60} className='iconsImg'/>
        <h3 className='iconText'>Java</h3>
    </div>
    </Item>
  </Grid>
  <Grid className={`itemBoxSlot ${isVisible6} i6`} ref={domRef6} item xs={3}>
  <Item>
    <div className="iconBox">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg" width={60} className='iconsImg'/>
    <h3 className='iconText'>C</h3>

    </div>
    </Item>
  </Grid>

  <Grid className={`itemBoxSlot ${isVisible7} i7`} ref={domRef7} item xs={3}>
    <Item>
        <div className="iconBox">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg" width={60} className='iconsImg'/>
        <h3 className='iconText'>C++</h3>

        </div>
    </Item>
  </Grid>

  <Grid className={`itemBoxSlot ${isVisible8} i8`} ref={domRef8} item xs={3}>
    <Item>
        <div className="iconBox">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width={60} className='iconsImg'/>
        <h3 className='iconText'>Python3</h3>

        </div>
    </Item>
  </Grid>

  <Grid className={`itemBoxSlot ${isVisible9} i9`} ref={domRef9} item xs={3}>
    <Item>
        <div className="iconBox">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" width={60} className='iconsImg'/>
        <h3 className='iconText'>Ubuntu</h3>

        </div>
    </Item>
  </Grid>

  <Grid className={`itemBoxSlot ${isVisible10} i10`} ref={domRef10} item xs={3}>
    <Item>
        <div className="iconBox">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" width={60} color='white' className='iconsImg'/>
        <h3 className='iconText'>Linux</h3>

        </div>
    </Item>
  </Grid>

  <Grid className={`itemBoxSlot ${isVisible11} i11`} ref={domRef11} item xs={3}>
    
    <Item>
        <div className="iconBox">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" width={60} className='iconsImg'
        />
        <h3 className='iconText'>Git</h3>

        </div>
    </Item>
  </Grid>

  <Grid className={`itemBoxSlot ${isVisible12} i12`} ref={domRef12} item xs={3}>
    <Item>
        <div className="iconBox">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" width={60} className='iconsImg'/>
        <h3 className='iconText'>HTML5</h3>

        </div>
    </Item>
  </Grid>

  <Grid className={`itemBoxSlot ${isVisible13} i13`} ref={domRef13} item xs={3}>
    <Item>
        <div className="iconBox">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" width={60} className='iconsImg'/>
        <h3 className='iconText'>CSS3</h3>

        </div>
    </Item>
  </Grid>


  <Grid className={`itemBoxSlot ${isVisible14} i14`} ref={domRef14} item xs={3}>
    <Item>
        <div className="iconBox">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width={60} className='iconsImg'/>
        <h3 className='iconText'>MySQL</h3>

        </div>
    </Item>
  </Grid>


  <Grid className={`itemBoxSlot ${isVisible15} i15`} ref={domRef15} item xs={3}>
    <Item>
        <div className="iconBox">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width={60} className='iconsImg'/>
        <h3 className='iconText'>MongoDB</h3>

        </div>
    </Item>
  </Grid>


  <Grid className={`itemBoxSlot ${isVisible16} i16`} ref={domRef16} item xs={3}>
    <Item>
        <div className="iconBox">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" width={60} className='iconsImg'/>
        <h3 className='iconText'>PHP</h3>

        </div>
    </Item>
  </Grid>

  

</Grid>
<hr className="componentSeperator" id="projects" />

<h1 className={`skillsTitle proj ${isTitleVisible2}`}  ref={domRefTitle2}>Projects</h1>
    <h3 className={`skillsSubTitle proj ${isSubtitleVisible2}`} ref={domRefSubtitle2}>Below are some of the projects that I've worked on and descriptions about them  </h3>
</>
  )
}

export default Skillsbar