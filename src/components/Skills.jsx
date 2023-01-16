import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Seperator from './Seperator';
import "./Skills.css"
export default function Skills() {

  const myRefRow1 = useRef();
  const [visibileRow1, setVisibileRow1] = useState(false)
   
  const myRefRow2 = useRef();
  const [visibileRow2, setVisibileRow2] = useState(false)

  const myRefRow3 = useRef();
  const [visibileRow3, setVisibileRow3] = useState(false)

  useEffect(() => { 

    const observer = new IntersectionObserver((entries) => {
      setVisibileRow1(entries[0].isIntersecting) 
      if(entries[0].isIntersecting){
        observer.unobserve(myRefRow1.current)

      }
      
    })
    observer.observe(myRefRow1.current)
    const observer2 = new IntersectionObserver((entries) => {
      setVisibileRow2(entries[0].isIntersecting) 
      if(entries[0].isIntersecting){
        observer2.unobserve(myRefRow2.current)

      }
    })
    observer2.observe(myRefRow2.current)

    const observer3 = new IntersectionObserver((entries) => {
      setVisibileRow3(entries[0].isIntersecting)
      if(entries[0].isIntersecting){
        observer3.unobserve(myRefRow3.current)

      }
    })
    observer3.observe(myRefRow3.current)


  }, [visibileRow1])
  

  return (
<>
    <Seperator name={"Skills"} scrollLink={"skills"}/>
    
    <div className="skillsContainer" id='skills'>

        

        

        <div className={`skillObject ${visibileRow1} I1`} ref={myRefRow1} style={{"background-color": "rgb(163, 154, 34, 0.7)"}}>
          <h4 className="headerName">JavaScript</h4>
          <p className='skillsText'>
            Experience working with ES6+ and JavaScript frameworks such as NodeJs For backend development of my projects
          </p>
          <img className = 'iconImg' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />

        </div>
        
        <div className={`skillObject ${visibileRow1} I2`} style={{"background-color": "rgb(34, 135, 163, 0.7)"}}>
          <h4 className="headerName">React</h4>
          <p className='skillsText'>
          Experience with using React for frontend development of my projects. With the goal of making Visually appealing and Functional websites.
          </p>
          <img className = 'iconImg' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
          style={{"background-color": "rgb(0,0,0,0)"}}
          />

        </div>

        <div className={`skillObject ${visibileRow1} I3`} style={{"background-color": "rgb(163, 56, 34, 0.7)"}}>
          <h4 className="headerName">Java</h4>
          <p className='skillsText'>
          Proficient with using Java's Object Oriented Functionalities for my projects. Additionally, I have experience working with the JavaSwing Framework.
          </p>
          <img className = 'iconImg' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg"
          style={{"background-color": "rgb(0,0,0,0)"}}
          />
          


        </div>


        <div className={`skillObject ${visibileRow2} I4`} ref={myRefRow2} style={{"background-color": "rgb(34, 90, 163, 0.7)"}}>
          <h4 className="headerName">C/C++</h4>
          <p className='skillsText'>
          Developed skills using C and C++ while working on Linux based Systems.
          </p>
          <img className = 'iconImg' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" 
          style={{"background-color": "rgb(0,0,0,0)"}}
          />

        </div>

        <div className={`skillObject ${visibileRow2} I5`}  style={{"background": "linear-gradient(45deg, rgba(34,135,163,1) 0%, rgba(163,154,34,0.7) 100%"}}
>
          <h4 className="headerName">Python3</h4>
          <p className='skillsText'>
          Experience with using Python3 and pythons libraries incorporating data strcutures. Whilst working on Content Based Image Retrieval.
          </p>
          <img className = 'iconImg' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
          style={{"background-color": "rgb(0,0,0,0)"}}
          />

        </div>

        <div className={`skillObject ${visibileRow2} I6`} style={{"background-color": "rgb(235, 122, 52, 0.7)"}}>
          <h4 className="headerName">HTML5/CSS</h4>
          <p className='skillsText'>
          Applied HTML and CSS for frontend develpment. With the goal of making the website user friendly. CSS is a language I continue to use for frontend development regardless of the framework.
          </p>
          <img className = 'iconImg' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
          style={{"background-color": "rgb(0,0,0,0)"}}
          />

        </div>

        <div className={`skillObject ${visibileRow3} I7`} ref={myRefRow3} style={{"background": "linear-gradient(45deg, rgba(24,95,115,1) 47%, rgba(255,146,0,1) 100%)"}}>
          <h4 className="headerName">MySQL</h4>
          <p className='skillsText'>
          SQL is the database language I am most familiar with. I have used it to create and manage databases for my projects.
          </p>
          <img className = 'iconImg' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" 
          style={{"background-color": "rgb(0,0,0,0)"}}
          />

        </div>

        <div className={`skillObject ${visibileRow3} I8`} style={{"background-color": "rgb(97, 129, 182,0.7)"}}>
          <h4 className="headerName">PHP</h4>
          <p className='skillsText'>
            Work with PHP for backend development of my projects along with SQL to make full stack applications.
          </p>
          <img className = 'iconImg' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" 
          style={{"background-color": "rgb(0,0,0,0)"}}
          />

        </div>

        <div className={`skillObject ${visibileRow3} I9`} style={{"background-color": "rgb(79, 170, 65,0.7)"}}>
          <h4 className="headerName">MongoDB</h4>
          <p className='skillsText'>
          Another database I have used is MongoDB. I have used it to create and manage databases for my fullstack social media application. I have grown accomstomed to its real time functionalites.
          </p>
          <img className = 'iconImg' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          style={{"background-color": "rgb(0,0,0,0)"}}
          />

        </div>

        
        </div>
        </>
        
  )
}
