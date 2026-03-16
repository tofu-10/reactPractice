import './styles/Home.css'
import homeMarvelLogo from '../assets/images/background/Marvel Rivals.png'
import epicStore from '../assets/images/platforms/epicStore.png'
import ps4Icon from '../assets/images/platforms/ps4Icon.png'
import ps5Icon from '../assets/images/platforms/ps5Icon.png'
import steamIcon from '../assets/images/platforms/steamIcon.png'
import xboxSeriesLogo from '../assets/images/platforms/xboxSeriesLogo.png'
export default function Home(){
 
    return (
      <>
        <section className="homeHero">
          <div className="bgVid-box">
            <video
              src="https://mrna.fp.ps.easebar.com/file/6969b1e93dae2c6fdf47c05dYJYPSsqe03"
              autoPlay
              loop
              muted
              preload="auto"
            ></video>

          <div className="homeMarvelLogo">
            <img src={homeMarvelLogo} alt="" />
          </div>
          <article className="slogan">
            <h3>The super hero Team-based pvp shooter</h3>
            <h2>all heroes are free to play!</h2>
          </article>
            <button className="PlayNowBtn">Play Now</button>

            <div className="platforms">
                <img className='platform' src={steamIcon} alt="Steam" />
                <img className='platform WL' src={ps5Icon} alt="PS5" />
                <img className='platform WL ps4' src={ps4Icon} alt="PS4" />
                <img className='platform WL' src={xboxSeriesLogo} alt="Xbox Series" />
                <img className='platform WL' src={epicStore} alt="Epic Store" />
            </div>
          </div>

        </section>
      </>
    );
}
