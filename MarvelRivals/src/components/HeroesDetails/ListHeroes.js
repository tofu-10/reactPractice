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

const heroes = [
  {
    id: "iron-man",
    heroName: "Iron Man",
    heroHumanName: "Tony Stark",
    role: "Duelist",
    description:
      "A genius billionaire who built a powerful suit of armor to protect the world. In the Timestream Entanglement, Stark deploys his most advanced Iron Man suit yet — using repulsor technology and flight to dominate the battlefield from above.",
    heroImage: ironmanPicture,
    heroBackground: ironmanlogo,  // your background image
  },
  {
    id: "moon-knight",
    heroName: "Moon Knight",
    heroHumanName: "Marc Spector",
    role: "Duelist",
    description:
      "Avatar of the Egyptian moon god Khonshu, Moon Knight is a ruthless and unpredictable vigilante. He wears white to be seen by his enemies, fighting through pain with reckless disregard. His Crescent Darts bounce between enemies, making him a deadly long-range area specialist.",
    heroImage: moonknightPicture,
    heroBackground: moonknightlogo,  // your background image
  },
  {
    id: "scarlet-witch",
    heroName: "Scarlet Witch",
    heroHumanName: "Wanda Maximoff",
    role: "Duelist",
    description:
      "Since the Timestream Entanglement, chaos magic is one of the few forces holding the threads of reality together. Should her powers fail, Wanda truly believes this universe will disintegrate — a fate she refuses to allow, no matter the cost.",
    heroImage: scarletwitchPicture,
    heroBackground: scarletwitchlogo,  // your background image
  },
  {
    id: "thor",
    heroName: "Thor",
    heroHumanName: "God of Thunder",
    role: "Vanguard",
    description:
      "The Asgardian god of thunder wields Mjolnir and commands the power of Thorforce. Unlike other Vanguards, Thor pushes enemies back with relentless damage, stacking Thorforce to unlock devastating abilities like the Awakening Rune.",
    heroImage: thorPicture,
    heroBackground: thorlogo,  // your background image
  },
  {
    id: "spider-man",
    heroName: "Spider-Man",
    heroHumanName: "Peter Parker",
    role: "Duelist",
    description:
      "The most agile hero in Marvel Rivals. Spider-Man swings freely across the battlefield, shoots Web-Clusters that attach Spider-Tracers to enemies, and hits hard up close. Mastering him is the hardest challenge in the game — but the payoff is unmatched.",
    heroImage: spidermanPicture,
    heroBackground: spidermanlogo,  // your background image
  },
];

export default heroes;