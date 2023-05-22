import React from 'react'
import socialmo1 from '../../assets/socialmo1.jpg'
import socialmo2 from '../../assets/socialmo2.jpg'
import CB1 from '../../assets/CBIR.png'
import "./projRight.css"
import {AiFillYoutube} from 'react-icons/ai'
import { Box, Grid } from '@mui/material';
import {AiFillGithub} from 'react-icons/ai'
import {AiFillCaretRight} from 'react-icons/ai';

function Algovisualizer() {
    return (
        <div className="projectContainerr">
        <img src={CB1} alt="boof" className="socialMoComputersr" />
    
        <div className="projectTextContainerr">
        <Box className='projectBoxr'
        sx={{
          bgcolor: 'white',
          borderRadius: 1,
          boxShadow: 3,
        }}>
        <p className="projectTextHeaderr"> Algovisualizer </p>
        <p className='projectTextr'> Algovisualizer is a powerful educational tool that helps users understand the inner workings of sorting algorithms, pathing/search algorithms, and CPU scheduling algorithms. By visualizing the algorithms in action, users can gain a deeper understanding of how they operate and make informed decisions when implementing them in their own projects</p>
    
        <div className="projectTechr">
        <a className='pageLinks' href='https://github.com/MohsinRehman12/algovisualizer'> <img className='hoverTextIconsf git' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></a>
        <a className='pageLinks' href='http://mohsinrehman.me/algovisualizer/'> <AiFillCaretRight className='hoverTextIconsf' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/youtube/youtube-original.svg" /></a>
        </div>
        </Box>
        </div>
        </div>
      )
}

export default Algovisualizer