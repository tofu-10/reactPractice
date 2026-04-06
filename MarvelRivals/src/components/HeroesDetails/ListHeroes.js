import ironmanlogo from "../../assets/images/HeroesPictures/IronMan/IronManLogo.png";
import moonknightlogo from "../../assets/images/HeroesPictures/MoonKnight/MoonKnightLogo.png";
import scarletwitchlogo from "../../assets/images/HeroesPictures/ScarletWitch/Logo.png";
import thorlogo from "../../assets/images/HeroesPictures/Thor/ThorLogo.png";
import spidermanlogo from "../../assets/images/HeroesPictures/SpiderMan/SpiderManLogo.png";
import ironmanPicture from "../../assets/images/HeroesPictures/IronMan/IronMan.png";
import moonknightPicture from "../../assets/images/HeroesPictures/MoonKnight/MoonKnight.png";
import scarletwitchPicture from "../../assets/images/HeroesPictures/ScarletWitch/Witch.png";
import thorPicture from "../../assets/images/HeroesPictures/Thor/Thor.png";
import spidermanPicture from "../../assets/images/HeroesPictures/SpiderMan/SpiderMan.png";
import ironHead from "../../assets/images/heroesHead/ironHead.png";
import moonHead from "../../assets/images/heroesHead/moonHead.png";
import scarletHead from "../../assets/images/heroesHead/witchHead.png";
import thorHead from "../../assets/images/heroesHead/thorHead.png";
import spiderHead from "../../assets/images/heroesHead/spiderHead.png";
import ironHeadSelected from "../../assets/images/heroesHead/ironHeadSelected.png";
import moonHeadSelected from "../../assets/images/heroesHead/moonHeadSelected.png";
import scarletHeadSelected from "../../assets/images/heroesHead/witchHeadSelected.png";
import thorHeadSelected from "../../assets/images/heroesHead/thorHeadSelected.png";
import spiderHeadSelected from "../../assets/images/heroesHead/spiderHeadSelected.png";
const heroes = [
  { 

    id: "iron-man",
    heroName: "Iron Man",
    heroHead: ironHead,
    heroHeadSelected: ironHeadSelected,
    isSelectedOrHover: false,
    heroHumanName: "A. Tony Stark",
    role: "Duelist",
    description:
    "Armed with superior intellect and a nanotech battlesuit of his own design, Tony Stark stands alongside gods as the Invincible Iron Man. His state of the art armor turns any battlefield into his personal playground, allowing him to steal the spotlight he so desperately desires.",
    heroImage: ironmanPicture,
    heroBackground: ironmanlogo,  // your background image
    rolesymbol: "https://www.marvelrivals.com/pc/gw/20241128194803/img/zy_jdj_0a676db8.png",
  },
  {
    id: "moon-knight",

    heroName: "Moon Knight",
    heroHead: moonHead,
    heroHeadSelected: moonHeadSelected,
    heroHumanName: "Marc Spector",
    role: "Duelist",
    isSelectedOrHover: false, 
    description:
    "Avatar of the Egyptian moon god Khonshu, Moon Knight is a ruthless and unpredictable vigilante. He wears white to be seen by his enemies, fighting through pain with reckless disregard. His Crescent Darts bounce between enemies, making him a deadly long-range area specialist.",
    heroImage: moonknightPicture,
    heroBackground: moonknightlogo,  // your background image
    rolesymbol: "https://www.marvelrivals.com/pc/gw/20241128194803/img/zy_jdj_0a676db8.png",
  },
  {
    id: "scarlet-witch",
    heroName: "Scarlet Witch",
    heroHead: scarletHead,
    heroHeadSelected: scarletHeadSelected,
    heroHumanName: "Wanda Maximoff",

    role: "Duelist",
    isSelectedOrHover: false,
    description:
    "Since the Timestream Entanglement, chaos magic is one of the few forces holding the threads of reality together. Should her powers fail, Wanda truly believes this universe will disintegrate — a fate she refuses to allow, no matter the cost.",
    heroImage: scarletwitchPicture,
    heroBackground: scarletwitchlogo,  // your background image
    rolesymbol: "https://www.marvelrivals.com/pc/gw/20241128194803/img/zy_jdj_0a676db8.png",
  },
  {
    id: "thor",
    heroName: "Thor",
    heroHead: thorHead,
    heroHeadSelected: thorHeadSelected,
    heroHumanName: "God of Thunder",
    role: "Vanguard",
    isSelectedOrHover: false,
    description:
    "The Asgardian god of thunder wields Mjolnir and commands the power of Thorforce. Unlike other Vanguards, Thor pushes enemies back with relentless damage, stacking Thorforce to unlock devastating abilities like the Awakening Rune.",
    heroImage: thorPicture,
    heroBackground: thorlogo,  // your background image
    rolesymbol: "https://www.marvelrivals.com/pc/gw/20241128194803/img/zy_xfz_c18d1719.png",
  },
  {
    id: "spider-man",
    heroName: "Spider-Man",
    heroHead: spiderHead,
    heroHeadSelected: spiderHeadSelected,

    heroHumanName: "Peter Parker",
    role: "Duelist",
    isSelectedOrHover: false,
    description:
    "The most agile hero in Marvel Rivals. Spider-Man swings freely across the battlefield, shoots Web-Clusters that attach Spider-Tracers to enemies, and hits hard up close. Mastering him is the hardest challenge in the game — but the payoff is unmatched.",
    heroImage: spidermanPicture,
    heroBackground: spidermanlogo,  // your background image
    rolesymbol: "https://www.marvelrivals.com/pc/gw/20241128194803/img/zy_jdj_0a676db8.png",
  },
];

export default heroes;