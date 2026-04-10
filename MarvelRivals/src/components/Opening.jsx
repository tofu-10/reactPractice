import Footer from "./Footer";
import HeroesInfo from "./HeroesDetails/HeroesInfo";
import Home from "./Home";
import { NewsSection } from "./NewsSec";
import S6Featured from "./S6Featured";


export default function Opening() {
  return (
    <>
      {/* Home */}

      <Home />

      {/* NewsSection */}
      <NewsSection />
      {/* S6Featured */}

      <S6Featured />
      {/* HeroesInfo */}

      <HeroesInfo />

    </>
  );
}
