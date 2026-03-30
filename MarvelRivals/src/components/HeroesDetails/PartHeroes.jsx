export default function PartHeroes({Role,heroName,description,heroImage,heroBackground}){
    return<>

        <div className="heroImg">
            <img src={heroBackground} alt="" />
            <img src={heroImage} alt="" />
        </div>
         <div className="heroInfo">
            <div className="role">{Role}</div>
            <div className="heroName">{heroName}</div>
            <div className="DescriptionName">{heroHumanName}</div>
            <p className="description">{description}</p>
        </div>
    </>
}