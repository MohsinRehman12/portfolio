import React from 'react'
import socialmo1 from '../../assets/socialmo1.jpg'
import socialmo2 from '../../assets/socialmo2.jpg'
import simplifAI1 from '../../assets/simplifAI.png'
import CB1 from '../../assets/CBIR.png'
import "./projRight.css"
import {AiFillYoutube} from 'react-icons/ai'
import { Box, Grid } from '@mui/material';
import {AiFillGithub} from 'react-icons/ai'
import {AiFillCaretRight} from 'react-icons/ai';

function SimplifAI() {
    return (
        <div className="projectContainerr">
        <img src={simplifAI1} alt="boof" className="socialMoComputersr" />
    
        <div className="projectTextContainerr">
        <Box className='projectBoxr'
        sx={{
          bgcolor: 'white',
          borderRadius: 1,
          boxShadow: 3,
        }}>
        <p className="projectTextHeaderr"> SimplifAI'd </p>
        <p className='projectTextr'> 
        
        SimplifAI'd is an article simplifying tool developed using the advanced GPT-4 Model. Its purpose is to make complex articles easier to understand. Users can simply input the URL of an article, and the tool will generate a concise and accurate summary of the content. This helps users save time and quickly grasp the main points of an article without having to read through the entire text.
        
        </p>
    
        <div className="projectTechr">
        <a className='pageLinks' href='https://github.com/MohsinRehman12/simplifAI'> <img className='hoverTextIconsf git' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></a>
        <a className='pageLinks' href='https://646e7f304fa3ca23a91f62c3--euphonious-mooncake-f43872.netlify.app/'> <AiFillCaretRight className='hoverTextIconsf' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/youtube/youtube-original.svg" /></a>
        </div>
        </Box>
        </div>
        </div>
      )
}

export default SimplifAI