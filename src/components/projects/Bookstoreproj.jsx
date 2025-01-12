import React from 'react'
import socialmo1 from '../../assets/socialmo1.jpg'
import socialmo2 from '../../assets/socialmoedit.png'
import book1 from '../../assets/bookstore.png'
import choices1 from '../../assets/choices.png'
import "./projRight.css"

import {AiFillYoutube} from 'react-icons/ai'
import { Box, Grid } from '@mui/material';
import {AiFillGithub} from 'react-icons/ai'

function Bookstoreproj() {
  return (
    <div className="projectContainerr">
    <img src={choices1} alt="boof" className="socialMoComputers" />

    <div className="projectTextContainerr">
    <Box className='projectBoxr'
    sx={{
      bgcolor: 'white',
      borderRadius: 1,
      boxShadow: 3,
    }}>
    <p className="projectTextHeaderr"> Choices </p>
    <p className='projectTextr'> Choices is a decentralized voting web application, developed on blockchain technology. It uses smart contracts and technologies such as MetaMask for authentication and secure voting. This system is designed to be rigid and immune to tampering for electios and polls in general </p>

    <div className="projectTechr">
    <a className='pageLinks' href='https://github.com/MohsinRehman12/decentralized-voting-app'> <img className='hoverTextIconsf git' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></a>
    </div>
    </Box>
    </div>
    </div>
  )
}

export default Bookstoreproj