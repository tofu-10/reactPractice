import newsLogo from "../assets/images/logo/newsLogo.png";
import "./styles/newsSec.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const newsSlides = [
  {
    id: 1,
    image:
      "https://r.res.easebar.com/pic/20260310/5f9a5c51-4aa1-4ed5-88b5-502379091371.jpg",
    title: "Marvel Rivals Version 20260312 Patch Notes",
    date: "2026/03/10",
    link: "https://www.marvelrivals.com/gameupdate/20260310/41548_1290394.html",
  },
  {
    id: 2,
    image:
      "https://r.res.easebar.com/pic/20260309/2d2cc518-e75d-4a70-96d5-4ba5f5f4bfd6.jpg",
    title: "Upgraded Anti-Throwing Strategy Now Live",
    date: "2026/03/09",
    link: "https://www.marvelrivals.com/announcements/20260309/40955_1290106.html",
  },
  {
    id: 3,
    image:
      "https://r.res.easebar.com/pic/20260305/41511a6a-70f9-47d5-a80b-f6e669781a44.jpg",
    title: "S6 Livestream Incentive Event – Winners",
    date: "2026/03/06",
    link: "https://www.marvelrivals.com/announcements/20260305/40955_1289568.html",
  },
  {
    id: 4,
    image:
      "https://r.res.easebar.com/pic/20260302/a745aff6-d5cf-4332-bcdf-1c38522a5aaa.jpg",
    title: "Marvel Rivals Version 20260305 Patch Notes",
    date: "2026/03/04",
    link: "https://www.marvelrivals.com/gameupdate/20260302/41548_1288987.html",
  },
  {
    id: 5,
    image:
      "https://r.res.easebar.com/pic/20260211/76dea81e-efa3-40c6-a910-ddcf02fafe8b.jpg",
    title: "What's new in Season 6.5 // Dev Vision",
    date: "2026/02/11",
    link: "https://www.marvelrivals.com/devdiaries/20260211/40954_1286508.html",
  },
];

const latestNews = [
  {
    id: 1,
    image:
      "https://r.res.easebar.com/pic/20260310/5f9a5c51-4aa1-4ed5-88b5-502379091371.jpg",
    title: "Marvel Rivals Version 20260312 Patch Notes",
    date: "2026/03/10",
    link: "https://www.marvelrivals.com/gameupdate/20260310/41548_1290394.html",
  },
  {
    id: 2,
    image:
      "https://r.res.easebar.com/pic/20260309/2d2cc518-e75d-4a70-96d5-4ba5f5f4bfd6.jpg",
    title: "Upgraded Anti-Throwing Strategy Now Live",
    date: "2026/03/09",
    link: "https://www.marvelrivals.com/announcements/20260309/40955_1290106.html",
  },
  {
    id: 3,
    image:
      "https://r.res.easebar.com/pic/20260305/41511a6a-70f9-47d5-a80b-f6e669781a44.jpg",
    title: "S6 Livestream Incentive Event – Winners",
    date: "2026/03/06",
    link: "https://www.marvelrivals.com/announcements/20260305/40955_1289568.html",
  },
  {
    id: 4,
    image:
      "https://r.res.easebar.com/pic/20260302/a745aff6-d5cf-4332-bcdf-1c38522a5aaa.jpg",
    title: "Marvel Rivals Version 20260305 Patch Notes",
    date: "2026/03/04",
    link: "https://www.marvelrivals.com/gameupdate/20260302/41548_1288987.html",
  },
];

export function NewsSection() {
  return (
    <div className="newsContainer">
        
      {/* Top section — swiper + featured news */}

      <div className="newsFlexed">
        <div className="newsImage">
          <Swiper
            modules={[Autoplay, Pagination]} 
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }} 
            loop
            style={{ width: "100%", height: "100%" }}
          >
            {newsSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <a
                  href={slide.link}
                  target="_blank"
                  rel="noreferrer"
                  className="slideContent"
                >
                  <img src={slide.image} alt={slide.title} />
                  <div className="slideInfo">
                    <p className="slideDate">{slide.date}</p>
                    <p className="slideTitle">{slide.title}</p>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Featured news on the right */}
        <div className="newsRight">
          <img src={newsLogo} alt="News" className="newsLogoImg" />
          <a
            href={newsSlides[0].link}
            target="_blank"
            rel="noreferrer"
            className="featuredNews"
          >
                <p className="featuredTitle">{newsSlides[0].title}</p>
            <p className="featuredDate">{newsSlides[0].date}</p>
            <p className="featuredDesc">
              Greetings, Rivals! We're thrilled to announce the upcoming patch
              drops on March 12th, 2026, at 09:00:00 (UTC)!
            </p>
          </a>
        </div>
      </div>

      {/* Latest news tab + cards */}
      <div className="latestSection">
        <div className="latestNewsTab">
          <div className="tab active">Latest</div>
        </div>

        <div className="latestNewsSwiper">
          {latestNews.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="latestCard"
            >
              <div className="imgLatestDiv">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="latestInfo">
                <p className="latestTitle">{item.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
