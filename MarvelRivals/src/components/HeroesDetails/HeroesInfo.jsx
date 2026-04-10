import "../styles/HeroesInfo.css"
import PartHeroes from "./PartHeroes"
import heroes from "./ListHeroes"
import { useState } from "react"

export default function HeroesInfo(){
    const [reference, setReference] = useState(0);

    function handleHeroInfoClick(key){
        setReference(key);

    }

    console.log(reference);

    return <>
        <div className="heroesInfoContainer">
            <PartHeroes 
                RoleSymbol={heroes[reference].rolesymbol} 
                Role={heroes[reference].role} 
                heroBackground={heroes[reference].heroBackground} 
                heroImage={heroes[reference].heroImage} 
                heroName={heroes[reference].heroName} 
                description={heroes[reference].description} 
                heroHumanName={heroes[reference].heroHumanName}
            />
            <ul className="heroesListPicker">
                
                {heroes.map((e, key) => (
                    <li 
                        onClick={() => {handleHeroInfoClick(key); }} 
                        key={e.id}
                        className={reference === key ? 'selected' : ''}
                    >
                        <img src={reference === key ? e.heroHeadSelected : e.heroHead} alt="selectedHero" /> 
                    </li>
                ))}
            </ul>
        </div>
    </>
}