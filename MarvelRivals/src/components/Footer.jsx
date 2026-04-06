import './styles/Footer.css'
import esrbLogo from '../assets/images/logo/esrbLogo.png'
import FooterLogo from '../assets/images/logo/FooterLogo.png'
export default function Footer(){
    return(
        <>
            <div className="footerContainer">
                <div className="footerInlineContainer">
                    <img src={FooterLogo} alt="NetEase and Marvel" className='footerLogos' draggable='false'/>
                    <div className="footerText">
                        <p>©2026 MARVEL</p>
                        <p>©1997-2026 NetEase,Inc. All Rights Reserved</p>
                        <div className="Policies">
                            <a href="https://protocol.unisdk.easebar.com/release/latest_v487.html" target='_blank'>Term of Use</a>
                            <a href="https://protocol.unisdk.easebar.com/release/latest_v475.html" target='_blank'>Privacy Policy</a>
                            <a href="">Support</a>  
                        </div>
                    </div>
                </div>
                <img src={esrbLogo} alt="esrb Logo" className='esrbLogo' draggable='false'/>
            </div>
        </>
    )
}