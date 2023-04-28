import logo from './logo.svg';
import './App.css';
import socialmo1 from './assets/socialmo1.jpg'
import socialmo2 from './assets/socialmo2.jpg'
import socialmo3 from './assets/socialmo3.jpg'
import NavbarDiv from './components/Navbar';
import Skills from './components/Skills';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@mui/material';
import About from './components/About';
import Banner from './components/Banner';
import { MarkunreadOutlined } from '@mui/icons-material';
import {AiFillYoutube} from 'react-icons/ai'
import Socialmo from './components/projects/Socialmo';
import Bookstore from './components/projects/Bookstore';
import Contentbased from './components/projects/Contentbased';
import Seperator from './components/Seperator';
import { Box, Grid } from '@mui/material';
import Socialmoproj from './components/projects/Socialmoproj';
import Contentbasedproj from './components/projects/Contentbasedproj';
import Skillsbar from './components/Skillsbar';
import Bannernew from './components/Bannernew';
import Bookstoreproj from './components/projects/Bookstoreproj';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Rehman_Mohsin_Resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Rehman_Mohsin_Resume.pdf';
            alink.click();
        })
    })
}

  const project1 = useRef();
  const project2 = useRef();
  const project3 = useRef();
  const [visibileRow1, setVisibileRow1] = useState(false)
  const [visibileRow2, setVisibileRow2] = useState(false)
  const [visibileRow3, setVisibileRow3] = useState(false)

  useEffect(() => { 

    const observer = new IntersectionObserver((entries) => {
      setVisibileRow1(entries[0].isIntersecting) 
      if(entries[0].isIntersecting){
        observer.unobserve(project1.current)

      }
      
    })

    observer.observe(project1.current)

    const observer2 = new IntersectionObserver((entries) => {
      setVisibileRow2(entries[0].isIntersecting) 
      if(entries[0].isIntersecting){
        observer2.unobserve(project2.current)

      }
      
    })

    observer2.observe(project2.current)

    const observer3 = new IntersectionObserver((entries) => {
      setVisibileRow3(entries[0].isIntersecting) 
      if(entries[0].isIntersecting){
        observer3.unobserve(project3.current)

      }
      
    })

    observer3.observe(project3.current)


  }, [visibileRow1])
  

  return (
    <div id="home">
    <NavbarDiv />
    <Bannernew />
    <hr className="componentSeperator" id="skills" />


    <Skillsbar/>


    <div className="App">
    

      {/* <Skills
      
      > </Skills>
      <Socialmo />
    <Bookstore />
    <Contentbased/> */}

    
    
    <Grid container spacing={1} className="projectsContainerGrid">
    <Grid item className={`slidein ${visibileRow1}`} ref={project1}>
    <Socialmoproj />
    </Grid>
    <Grid item className={`slidein2 ${visibileRow2}`} ref={project2}>
    <Contentbasedproj />
    </Grid>
    <Grid item className={`slidein ${visibileRow3}`} ref={project3}>
    <Bookstoreproj />
    </Grid>
    
    </Grid>
    <hr className="componentSeperator" id="contactme" />

    <Contact />  

    <Footer />  
        

    </div>
    </div>
    
  );
}

export default App;
