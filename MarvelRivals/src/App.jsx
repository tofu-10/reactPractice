import './App.css'
import marvelLogo from './assets/images/logo/marvelLogo.png'
import worldLogo from './assets/images/favicons/worldLogo.png'
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import LoginAccountLogo from './assets/images/favicons/LoginAccountLogo.png'
import Home from './components/Home';
import { NewsSection } from './components/NewsSec';
function App() {

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
          <Link to={''}>ESPORTS</Link>
        </div>
        <div className="NavRight">
          <div className="language">
            <img src={worldLogo} alt="" id='langWorldLogo' />
          </div>
          <div className="loginBox">
            <img src={LoginAccountLogo} alt=""  style={{height:'20px', filter: "invert"}}/>
            <Link to={''} className='logInBtn'>Log In</Link>
          </div>
          <button className="download-btn">Download</button>
        </div>
      </div>

{/* Home */}

<Home/>


{/* NewsSection */}
<NewsSection/>
    </BrowserRouter>
    </>
  );
}

export default App
