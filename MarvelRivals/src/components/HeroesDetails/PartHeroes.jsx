import { useEffect } from 'react'
import '../styles/PartHeroes.css'

export default function PartHeroes({heroHumanName,Role,RoleSymbol,heroName,description,heroImage,heroBackground}){
    return<>



        <div className="heroImgContainer">
            <img src={heroBackground} alt="" className='heroBackground' draggable="false"/>
 
 <img src={heroImage} alt="" className='heroImage' draggable="false"/>
 
        </div>
         <div className="heroInfoContainer">
            <div className="role">
                <img src={RoleSymbol} alt={`${Role} Picture`} />
                {Role}</div>
            <div className="heroName">{heroName}</div>
            <div className="heroHumanName">{heroHumanName}</div>
            <p className="description">{description}</p>
</div>
    </>
}