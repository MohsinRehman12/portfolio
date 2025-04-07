import React from 'react'
import socialmo1 from '../../assets/socialmo1.jpg'
import socialmo2 from '../../assets/socialmo2.jpg'
import CB1 from '../../assets/CBIR.png'
import "./projLeft.css"
import {AiFillYoutube} from 'react-icons/ai'
import { Box, Grid } from '@mui/material';
import {AiFillGithub} from 'react-icons/ai'

function Contentbasedproj() {
    return (
        <div className="projectContainer">
        <img src={CB1} alt="boof" className="socialMoComputersr" />
    
        <div className="projectTextContainer">
        <Box className='projectBox'
        sx={{
          bgcolor: 'white',
          borderRadius: 1,
          boxShadow: 3,
        }}>
        <p className="projectTextHeader"> NBA Linuep Predictor </p>
        <p className='projectText'> Machine learning model using Scikit-learn and pandas to predict missing NBA lineup players, achieving 81% accuracy and F1-score on over 1000 lineups from 2009-2016.</p>
    
        <div className="projectTech">
        <a className='pageLinks' href='https://github.com/MohsinRehman12/NBA-Lineup-prediction'> <img className='hoverTextIconsf git' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></a>
        </div>
        </Box>
        </div>
        </div>
      )
}

export default Contentbasedproj