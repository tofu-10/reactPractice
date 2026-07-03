import React, { useState } from 'react'
import marvelLogo from '../assets/images/logo/marvelLogo.png'
import worldLogo from '../assets/images/favicons/worldLogo.png'
import LoginAccountLogo from '../assets/images/favicons/LoginAccountLogo.png'
import { Link } from 'react-router-dom';
import { DownloadSection } from './DownloadSection';
import "./styles/NavBar.css"
function NavBar() {
     const [isDwnldSecVisible, setisDwnldSecVisible]=useState(false);
    function handleDownloadClick() {
        setisDwnldSecVisible(!isDwnldSecVisible);
    }
    
    function handleHeroClick() {
        const heroesSection = document.getElementById('heroesInfoSection');
        heroesSection?.scrollIntoView({ behavior: 'smooth' });
    }
  return (
    <div>
      
        <div className="NavBar">
        <div className="NavLeft">
          <img src={marvelLogo} alt="" id="navMarvelLogo"/>
          <Link to={''}>HOME</Link>
          <Link to={''}>GAME INFO</Link>
          <button onClick={handleHeroClick} className="hero-btn">HERO</button>
          <Link to={''}>MEDIA</Link>
          <Link to={'./partner'}>PARTNERS</Link>
        </div>
        <div className="NavRight">
          <div className="language">
            <img src={worldLogo} alt="" id='langWorldLogo' />
          </div>
          <div className="loginBox">
            <img src={LoginAccountLogo} alt=""  style={{height:'20px', filter: "invert"}}/>
            <button  className='logInBtn'>LOG IN</button>
          </div>
          <button className="download-btn" onClick={handleDownloadClick}>Download</button>
        </div>
      </div>
    {isDwnldSecVisible && 
<div style={{zIndex:"1000", position:"fixed",top: '0', left:'0'}}>
  <DownloadSection handleDownloadClick={handleDownloadClick}/>
  </div>
  }
    </div>

    
  )
}

export default NavBar
