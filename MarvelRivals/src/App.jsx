import './App.css'

import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import LoginAccountLogo from './assets/images/favicons/LoginAccountLogo.png'
import Home from './components/Home';
import { NewsSection } from './components/NewsSec';
import S6Featured from './components/S6Featured';
import HeroesInfo from './components/HeroesDetails/HeroesInfo';
import Footer from './components/Footer';
import { DownloadSection } from './components/DownloadSection';
import Partner from './components/Partner';
import NavBar from './components/NavBar';
import Opening from './components/Opening';
function App() {


  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Opening/>}></Route>
      <Route path='/partner' element={<Partner/>}></Route>
    </Routes>
    <Footer/>

    </>
  );
}

export default App
