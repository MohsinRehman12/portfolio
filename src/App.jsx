import logo from './logo.svg';
import './App.css';
import socialmo1 from './assets/socialmo1.jpg'
import socialmo2 from './assets/socialmo2.jpg'
import socialmo3 from './assets/socialmo3.jpg'
import NavbarDiv from './components/Navbar';
import Skills from './components/Skills';
import { useEffect, useRef, useState } from 'react';
import About from './components/About';
import Banner from './components/Banner';
import { MarkunreadOutlined } from '@mui/icons-material';
import {AiFillYoutube} from 'react-icons/ai'
import Socialmo from './components/projects/Socialmo';
import Bookstore from './components/projects/Bookstore';
import Contentbased from './components/projects/Contentbased';
import Seperator from './components/Seperator';
function App() {

  


  

  return (
    <>
    <NavbarDiv />
    <Banner />

    <About />
    <div className="App">
    

      <Skills
      
      > </Skills>
      <Socialmo />
    <Bookstore />
    <Contentbased/>
        
           
      
    <Seperator name={"Contact Me"} scrollLink={"contactme"}/>

        <div className="contactInfo">
        <MarkunreadOutlined></MarkunreadOutlined>
          <p className="contactEmail">
            mohsinrehmaninfo@gmail.com
          </p>
        </div>
        
        

    </div>
    </>
    
  );
}

export default App;
