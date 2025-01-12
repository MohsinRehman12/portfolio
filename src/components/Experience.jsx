import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { useRef, useEffect, useState } from 'react';
import './Skillbar.css'
import './Experience.css'
export default function Experience() {

  const [isVisible, setVisible] = useState(false);
  const [isVisible2, setVisible2] = useState(false);
  const [isTitleVisible, setTitleVisible] = useState(false);
  const [isTitleVisible2, setTitleVisible2] = useState(false);
  const [isSubtitleVisible, setSubtitleVisible] = useState(false);
  const [isSubtitleVisible2, setSubtitleVisible2] = useState(false);

  const domRef = useRef();
  const domRef2 = useRef();
  const domRefTitle = useRef();
  const domRefTitle2 = useRef();
  const domRefSubtitle = useRef();
  const domRefSubtitle2 = useRef();

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      setVisible(entries[0].isIntersecting) 
        if(entries[0].isIntersecting){
          observer.unobserve(domRef.current)
    
        }
          
    })
    observer.observe(domRef.current)

    const titleObserver = new IntersectionObserver((entries) => {
      setTitleVisible(entries[0].isIntersecting)
      if(entries[0].isIntersecting){
          titleObserver.unobserve(domRefTitle.current)
      }
    })
    titleObserver.observe(domRefTitle.current)

    const subtitleObserver = new IntersectionObserver((entries) => {
      setSubtitleVisible(entries[0].isIntersecting)
      if(entries[0].isIntersecting){
          subtitleObserver.unobserve(domRefSubtitle.current)
      }
  })
  subtitleObserver.observe(domRefSubtitle.current)
   
  }, [isVisible])

  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Bombardier Aerospace',
      duration: 'September 2023 - September 2024',
      description: 
        'Developed a cross-compatible Python script for automating switch configurations across Cisco and Juniper switches, reducing outsourcing costs. \n' 
        + 'Engineered and optimized Python scripts to monitor and manage network health across four sites (Chicago, Dallas, Tucson, Wichita), each with over 1,000 employees, enhancing network security by detecting unauthorized devices. \n' +
          ' Automated network data collection and reporting with a Python script, reducing report generation time from minutes to seconds.\n' +
          'Collaborated with vendors and internal teams to integrate network solutions, ensuring smooth transitions and supporting network operations at multiple sites.'
    },
    {
      title: 'Database Administrator',
      company: 'Decent Marble',
      duration: 'May 2021 - November 2021',
      description: 
        'Implemented and developed database designs incorporating data models to monitor inventory, sales, and statistics for $130,000 annual revenue business. \n' +
        'Tested programs and databases to identify issues and make necessary modifications. \n' +
        'Communicated with stakeholders to define problem areas with operations and created custom solutions to address future growth and scalability of business operations.'
    }
  ];

  return (
    <>
        <Grid container spacing={2} width="90%" justifySelf="center"  justifyContent="center" ref={domRef} alignItems="stretch">
          {experiences.map((experience, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} 
            >
              <Card className={`experienceCard ${isVisible}`}
              ref={domRef}
              marginLeft={1}
              marginRight={1}
              
              >
                <CardContent>
                  <Typography variant="h6" className="experienceTitle">
                    {experience.title}
                  </Typography>
                  <Typography variant="subtitle1" className="experienceCompany">
                    {experience.company}
                  </Typography>
                  <Typography variant="body2" className="experienceDuration">
                    {experience.duration}
                  </Typography>
              
              {/* Render bullet points from the description */}
              <ul className="experienceDescription">
                {experience.description.split('\n').map((line, idx) => (
                  <li key={idx}>
                    <Typography variant="body1" className='experienceDescription'>
                      {line}
                    </Typography>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>

    <hr className="componentSeperator" id="projects" />

    <h1 className={`skillsTitle proj ${isTitleVisible}`}  ref={domRefTitle}>Projects</h1>
    <h3 className={`skillsSubTitle proj ${isSubtitleVisible}`} ref={domRefSubtitle}>Below are some of the projects that I've worked on and descriptions about them  </h3>

  </>
  );
}
