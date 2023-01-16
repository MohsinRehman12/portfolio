import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { MarkunreadOutlined } from '@mui/icons-material';
import {AiFillYoutube} from 'react-icons/ai'
import socialmo1 from '../../assets/socialmo1.jpg'
import socialmo2 from '../../assets/socialmo2.jpg'
import socialmo3 from '../../assets/socialmo3.jpg'
import './projects.css'
import Seperator from '../Seperator';
function Socialmo() {
    const myRef = useRef();
  const [visibile, setVisibile] = useState(false)
    

  useEffect(() => { 

    const observer = new IntersectionObserver((entries) => {
      setVisibile(entries[0].isIntersecting) 
      if(entries[0].isIntersecting){
        observer.unobserve(myRef.current)

      }
    })
    observer.observe(myRef.current)
  }, [])
  return (
    <>
    <Seperator name={"Projects"} scrollLink={"projects"}/>
    <div className={"socialMoWrapper"+visibile}>
        <div className="socialMoText">
        <h1 className='hoverTextHeader'>SocialMo</h1>
        <div className="socialMoIcons">
        <img className='hoverTextIcons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
        <img className='hoverTextIcons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        <img className='hoverTextIcons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
        <img className='hoverTextIcons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" />

        
        </div>
        <p className='hoverTextDesc'>
        SocialMo is a full stack MERN social media application with live chatting that incorporates SocketIO
        
        </p>

        </div>

        <div className="socialMoContainer"
        ref={myRef}

        >

        <img src={socialmo3} alt="boof" className="socialMoPhone" />


        <div className="socialMoComputerContainer">

        <img src={socialmo2} alt="boof" className="socialMoComputer" />
        <img src={socialmo1} alt="boof" className="socialMoComputer" />

        </div>

      


        </div>
        <div className="socialMoLinks">
       <a className='pageLinks' href='https://www.youtube.com/watch?v=y2LYWy7fx4k'> <AiFillYoutube  className='hoverTextIconsyt' /></a>
       <a className='pageLinks' href='https://github.com/MohsinRehman12/socialmomern'> <img className='hoverTextIcons git' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /> 
       
       </a>

        </div>

        </div>


       

        
           
      
</>
  )
}

export default Socialmo