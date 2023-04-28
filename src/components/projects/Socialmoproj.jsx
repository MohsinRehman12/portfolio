import React from 'react'
import socialmo1 from '../../assets/socialmo1.jpg'
import socialmo2 from '../../assets/socialmoedit.png'
import "./projLeft.css"

import {AiFillYoutube} from 'react-icons/ai'
import { Box, Grid } from '@mui/material';
import {AiFillGithub} from 'react-icons/ai'

function Socialmoproj() {
  return (
    <div className="projectContainer">
    <img src={socialmo2} alt="boof" className="socialMoComputers" />

    <div className="projectTextContainer">
    <Box className='projectBox'
    sx={{
      bgcolor: 'white',
      borderRadius: 1,
      boxShadow: 3,
    }}>
    <p className="projectTextHeader"> SocialMo </p>
    <p className='projectText'> SocialMo is a full-stack social media MERN application that allows users to follow each other, post, like, comment, and upload photos and more.
    It also allows for real-time chat between users. Additionally, it contains proper encryption for user account information</p>

    <div className="projectTech">
    <a className='pageLinks' href='https://www.youtube.com/watch?v=y2LYWy7fx4k'> <AiFillYoutube  className='hoverTextIconsfyt' /></a>
    <a className='pageLinks' href='https://github.com/MohsinRehman12/socialmomern'> <img className='hoverTextIconsf git' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></a>
    </div>
    </Box>
    </div>
    </div>
  )
}

export default Socialmoproj