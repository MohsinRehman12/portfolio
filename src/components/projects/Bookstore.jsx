import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { MarkunreadOutlined } from '@mui/icons-material';
import {AiFillYoutube} from 'react-icons/ai'
import bookstore from '../../assets/bookstore.jpg'

import './projects.css'
function Bookstore() {
    const myRefB = useRef();
  const [visibileB, setVisibileB] = useState(false)
    

  useEffect(() => { 

    const observerB = new IntersectionObserver((entries) => {
      setVisibileB(entries[0].isIntersecting) 
      if(entries[0].isIntersecting){
        observerB.unobserve(myRefB.current)

      }
    })
    observerB.observe(myRefB.current)
  }, [])
  return (
    <>
    <div className={"socialMoWrapper"+visibileB}>
        <div className="socialMoText">
        <h1 className='hoverTextHeader'>Kentrells Bookstore</h1>
        <div className="socialMoIcons">
        <img className='hoverTextIcons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
        <img className='hoverTextIcons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        <img className='hoverTextIcons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
        
        </div>
        <p className='hoverTextDesc'>
        Kentrells Bookstore is a full stack E-commerce bookstore with user a user friendly interface, shopping cart, search, and payment system functionalities.
        
        </p>

        </div>

        <div className="socialMoContainer"
        ref={myRefB}

        >

        <img className='bookstoreImg' src={bookstore} alt="bookstore" />
        
      


        </div>
        <div className="socialMoLinks">
       <a className='pageLinks' href='https://github.com/zubairislam69/KentrellsBookstore'> <img className='hoverTextIcons git' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /> 
       
       </a>

        </div>

        </div>


       
</>
  )
}

export default Bookstore