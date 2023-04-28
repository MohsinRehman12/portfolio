import React from 'react'
import socialmo1 from '../../assets/socialmo1.jpg'
import socialmo2 from '../../assets/socialmo2.jpg'
import CB1 from '../../assets/CBIR.png'
import "./projRight.css"
import {AiFillYoutube} from 'react-icons/ai'
import { Box, Grid } from '@mui/material';
import {AiFillGithub} from 'react-icons/ai'

function Contentbasedproj() {
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
        <p className="projectTextHeaderr"> Content Based Image Retrieval </p>
        <p className='projectTextr'> Python program that uses projections on images in a dataset to find the most similar images to a 60% accuracy rate. Incorporates heuristic comparisions and techniques such as manhattan distance, and projection mapping.</p>
    
        <div className="projectTechr">
        <a className='pageLinks' href='https://github.com/MohsinRehman12/ContentBasedImageRetrieval'> <img className='hoverTextIconsf git' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></a>
        </div>
        </Box>
        </div>
        </div>
      )
}

export default Contentbasedproj