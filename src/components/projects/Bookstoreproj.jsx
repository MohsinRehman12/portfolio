import React from 'react'
import socialmo1 from '../../assets/socialmo1.jpg'
import socialmo2 from '../../assets/socialmoedit.png'
import book1 from '../../assets/bookstore.png'
import "./projRight.css"

import {AiFillYoutube} from 'react-icons/ai'
import { Box, Grid } from '@mui/material';
import {AiFillGithub} from 'react-icons/ai'

function Bookstoreproj() {
  return (
    <div className="projectContainerr">
    <img src={book1} alt="boof" className="socialMoComputers" />

    <div className="projectTextContainerr">
    <Box className='projectBoxr'
    sx={{
      bgcolor: 'white',
      borderRadius: 1,
      boxShadow: 3,
    }}>
    <p className="projectTextHeaderr"> Kentrells Bookstore </p>
    <p className='projectTextr'> Kentrells Bookstore is a full stack E-commerce bookstore with user a user friendly interface, shopping cart, search, and payment system functionalities. It allows the user to register, login, look at past purchases that they have made. Additonally, it incorporates holiday offers into sales</p>

    <div className="projectTechr">
    <a className='pageLinks' href='https://github.com/zubairislam69/KentrellsBookstore'> <img className='hoverTextIconsf git' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></a>
    </div>
    </Box>
    </div>
    </div>
  )
}

export default Bookstoreproj