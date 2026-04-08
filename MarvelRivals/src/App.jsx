import './App.css'
import marvelLogo from './assets/images/logo/marvelLogo.png'
import worldLogo from './assets/images/favicons/worldLogo.png'
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import LoginAccountLogo from './assets/images/favicons/LoginAccountLogo.png'
import Home from './components/Home';
import { NewsSection } from './components/NewsSec';
import S6Featured from './components/S6Featured';
import HeroesInfo from './components/HeroesDetails/HeroesInfo';
import Footer from './components/Footer';
import { DownloadSection } from './components/DownloadSection';
import { useState } from 'react';
function App() {

const [isDwnldSecVisible, setisDwnldSecVisible]=useState(false);


  function handleDownloadClick() {
    setisDwnldSecVisible(!isDwnldSecVisible);
  }
  return (
    <>

    <BrowserRouter>

      <div className="NavBar">
        <div className="NavLeft">
          <img src={marvelLogo} alt="" id="navMarvelLogo"/>
          <Link to={''}>NEWS</Link>
          <Link to={''}>GAME INFO</Link>
          <Link to={''}>HERO <s></s></Link>
          <Link to={''}>EVENT</Link>
          <Link to={''}>MEDIA</Link>
          <Link to={''}>PARTNERS</Link>
        </div>
        <div className="NavRight">
          <div className="language">
            <img src={worldLogo} alt="" id='langWorldLogo' />
          </div>
          <div className="loginBox">
            <img src={LoginAccountLogo} alt=""  style={{height:'20px', filter: "invert"}}/>
            <Link to={''} className='logInBtn'>LOG IN</Link>
          </div>
          <button className="download-btn" onClick={handleDownloadClick}>Download</button>
        </div>
      </div>

{/* Home */}

<Home/>

{isDwnldSecVisible && 
<div style={{zIndex:"1000", position:"fixed",top: '0', left:'0'}}>
  <DownloadSection handleDownloadClick={handleDownloadClick}/>
  </div>
  }
{/* NewsSection */}
<NewsSection/>

{/* S6Featured */}

<S6Featured/>

{/* HeroesInfo */}

<HeroesInfo/>

{/* footer */}

<Footer/>



    </BrowserRouter>
    </>
  );
}

export default App
