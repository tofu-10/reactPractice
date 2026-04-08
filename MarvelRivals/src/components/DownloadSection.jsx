import LogoAndTexts from '../assets//images/background/downloadSection/LogoAndTexts.png'
import epic from '../assets/images/background/downloadSection/PlatformLogos/epic.png'
import netEase from '../assets/images/background/downloadSection/PlatformLogos/netEase.png'
import ps4 from '../assets/images/background/downloadSection/PlatformLogos/ps4.png'
import ps5 from '../assets/images/background/downloadSection/PlatformLogos/ps5.png'
import steam from '../assets/images/background/downloadSection/PlatformLogos/steam.png'
import xbox from '../assets/images/background/downloadSection/PlatformLogos/xbox.png'
import { useEffect } from 'react'
import './styles/DownloadSection.css'
export function DownloadSection({handleDownloadClick}){

 useEffect(() => {
        // Disable scrollbar when component mounts
        document.body.classList.add('download-open');
        
        // Re-enable scrollbar when component unmounts 
        return () => {
            document.body.classList.remove('download-open');
        };
    }, []);


    return(
        <>
            <span className="dwnldCloseCross" onClick={handleDownloadClick}>

            </span>
            <div className="downloadSectionContainter">
                <div className="dwnldSlogan">
                    <img src={LogoAndTexts} alt="Marvels." />
                </div>
                <div className="dwnldPlatforms">
                    <a target='_blank' href='https://store.playstation.com/en-us/concept/10010451/' className="dwnldPs5">
                        <img src={ps5} alt="PlayStation 5" />
                        <p className='dwnldPlatformName'>PlayStation 5 | PlayStation 5PRO</p>
                    </a>
                    <a  target='_blank' href="https://store.playstation.com/en-gb/product/UB1229-CUSA55048_00-0731814509669742/"className="dwnldPs4">
                        <img src={ps4} alt="PlayStation 4" />
                        <p className='dwnldPlatformName'>PlayStation 4</p>
                    </a>
                    <a target='_blank' href="https://store.steampowered.com/app/2767030/Marvel_Rivals/" className="dwnldSteam">
                        <img src={steam} alt="Steam" />
                        <p className='dwnldPlatformName'>Windows</p>
                    </a>
                    <a target='_blank' href="https://www.xbox.com/en-gb/games/store/marvel-rivals/9n8pmw7qmd3d" className="dwnldXbox">
                        <img src={xbox} alt="Xbox" />
                        <p className='dwnldPlatformName'>Xbox Series X|S | Xbox One</p>
                    </a>
                    <a  target='_blank' href="https://www.neteasegames.com/game/hot/" className="dwnldNetease">
                        <img src={netEase} alt="NetEase" />
                        <p className='dwnldPlatformName'>Windows</p>
                    </a>
                    <a target='_blank' href='https://store.epicgames.com/en-US/p/marvel-rivals-182004' className="dwnldEpic">
                        <img src={epic} alt="Epic Games Store" />
                        <p className='dwnldPlatformName'>Windows</p>
                    </a>
                </div>
            </div>
        </>
    )
}