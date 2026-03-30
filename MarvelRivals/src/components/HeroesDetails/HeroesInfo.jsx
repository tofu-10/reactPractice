import "../styles/HeroesInfo.css"
import PartHeroes from "./PartHeroes"
import heroes from "./ListHeroes"

export default function HeroesInfo(){

    return<>
       <div className="heroesInfoContainer">
            <PartHeroes Role={heroes[0].role} heroBackground={heroes[0].heroBackground} heroImage={heroes[0].heroImage} heroName={heroes[0].heroName} description={heroes[0].description}/>        
       </div>
    </>
}