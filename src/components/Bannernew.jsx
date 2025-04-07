import React, { useState, useEffect, useRef } from 'react';
import './Bannernew.css';
import Button from '@mui/material/Button';
import Aboutimg from '../assets/portfoliopfp.jpg';
import fileSaver from "file-saver";
import { TypeAnimation } from 'react-type-animation';
import { LineWeight, Margin } from '@mui/icons-material';


function Bannernew() {
  const title = useRef();
  const profession1 = useRef();
  const profession2 = useRef();

  const infoRef = useRef();
  const buttonResumeRef = useRef();
  const imgBackgroundEff = useRef();

  const [visibleTitle, setVisibleTitle] = useState(false);
  const [visibleProfession1, setVisibleProfession1] = useState(false);
  const [visibleProfession2, setVisibleProfession2] = useState(false);
  const [visibleButton, setVisibleButton] = useState(false);
  const [visibleInfo, setVisibleInfo] = useState(false);
  const [visibleImg, setVisibleImg] = useState(false);

  const downloadTxtFile = () => {
      window.location.href = "https://mohsinrehman.me/portfolio/resume/Resume_Mohsin_Rehman_2025.pdf";
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setVisibleTitle(entries[0].isIntersecting);
      if (entries[0].isIntersecting) observer.unobserve(title.current);
    });
    observer.observe(title.current);

    const observer1 = new IntersectionObserver((entries) => {
      setVisibleProfession1(entries[0].isIntersecting);
      if (entries[0].isIntersecting) observer1.unobserve(profession1.current);
    });
    observer1.observe(profession1.current);

    const observer2 = new IntersectionObserver((entries) => {
      setVisibleProfession2(entries[0].isIntersecting);
      if (entries[0].isIntersecting) observer2.unobserve(profession2.current);
    });
    observer2.observe(profession2.current);

    const observer3 = new IntersectionObserver((entries) => {
      setVisibleInfo(entries[0].isIntersecting);
      if (entries[0].isIntersecting) observer3.unobserve(infoRef.current);
    });
    observer3.observe(infoRef.current);

    const observer4 = new IntersectionObserver((entries) => {
      setVisibleButton(entries[0].isIntersecting);
      if (entries[0].isIntersecting) observer4.unobserve(buttonResumeRef.current);
    });
    observer4.observe(buttonResumeRef.current);

    const observer5 = new IntersectionObserver((entries) => {
      setVisibleImg(entries[0].isIntersecting);
      if (entries[0].isIntersecting) observer5.unobserve(imgBackgroundEff.current);
    });
    observer5.observe(imgBackgroundEff.current);
  }, []);

  return (
    <div className="bannerContain">
      <div className="bannerBoxContainer">
        <div className="bannerBox">
          <h1 className={`bannerText ${visibleTitle ? 'true' : 'false'}`} ref={title}>
            Mohsin Rehman
          </h1>

          {/* TypeAnimation with independent visibility */}
          <TypeAnimation
            sequence={[
              
              'Full Stack Developer',
              3000,
              'Mobile Developer',
              3000,
              'Data Scientist',
              3000,
              'Data Analyst',
              3000
            ]}
            wrapper="span"
            speed={25}
            deletionSpeed={50}
            style={{ 
              color: 'whitesmoke', 
              fontSize: '1.8em',
              fontWeight: 200,
              Margin: 0,
              transition: '0.3s 0.3s ease-in-out',
              
            
            }}
            repeat={Infinity}
            ref={profession1}
          />
          
          <h3 className={`bannerTextProf2 ${visibleProfession2 ? 'true' : 'false'}`} ref={profession2}>
            Software Engineer
          </h3>

          <div className="bannerInfoBox">
            <p className={`bannerInfoText ${visibleInfo ? 'true' : 'false'}`} ref={infoRef}>
              Hi, My name is Mohsin Rehman, and I am in my final year of Software Engineering at Ontario Tech University. I am passionate about Artificial Intelligence and Application Development whether it is Web or Mobile. Additionally, I thrive in designing and developing projects, and tackling problems whether they may be in the form of errors and bugs. I can adapt and learn about new environments and problems associated with them very quickly. I am currently seeking a New Grad Software Engineering/Developer position as Full Stack Developer, Web/Mobile Developer, Data Scientist, and Data Analyst.
            </p>
          </div>

          <div className="buttonBox">
            <Button onClick={downloadTxtFile} className={`buttonResume ${visibleButton ? 'true' : 'false'}`} ref={buttonResumeRef} variant="outlined">
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      <img className={`imgBackground ${visibleImg ? 'true' : 'false'}`} ref={imgBackgroundEff} src={Aboutimg} />
    </div>
  );
}

export default Bannernew;

