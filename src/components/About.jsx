import React from 'react';
import { Grid, Typography } from '@mui/material';
import "./About.css";
import aboutImg from '../assets/memoji.jpg';

export default function About() {
  return (
    <>
      <div className="aboutContainer section" id="About">
        <Typography variant="h4" className="aboutHeader">
          About Me
        </Typography>
        <div className="headerSeperator"></div>

        <Grid container spacing={2} alignItems="center" justifyContent="center">
          {/* Image */}
          <Grid item xs={12} md={6}>
            <img className="aboutImg" src={aboutImg} alt="aboutImg" />
          </Grid>

          {/* Text */}
          <Grid item xs={12} md={6}>
            <Typography className="aboutText" variant="body1">
              I am a third-year software engineering student at Ontario Tech University with aspirations of becoming a Full-Stack developer. I’m passionate about designing and developing projects, and tackling problems whether they may be in the form of errors and bugs. I can adapt and learn about new environments and problems associated with them very quickly. I’m continuously looking for new opportunities to learn and grow as a developer.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
