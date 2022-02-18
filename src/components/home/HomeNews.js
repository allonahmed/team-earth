import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Navigation } from "swiper";
import useWindowDimensions from "../../assets/WindowDimensions";
import DayConvertor from "../../assets/DayConvertor";
import NewsCard from "./NewsCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

const HomeNews = () => {
  const [data, setData] = useState([]);
  const { width, heigth } = useWindowDimensions();

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  //converts date to formatted date needed for api
  const date = DayConvertor(new Date());
  //get date from exactly one week ago
  const lastWeek = DayConvertor(
    new Date(new Date().getTime() - 60 * 60 * 24 * 1000 * 7)
  );

  const API_URL = `https://newsapi.org/v2/everything?q=climate-change&from=${lastWeek}&to=${date}&sortBy=relevancy&apiKey=`;

  //api request to get news data
  useEffect(() => {
    axios
      .get(`${API_URL}${process.env.REACT_APP_NEWS_KEY}`)
      .then((response) => {
        if (response.status === 200) {
          setData(response.data.articles);
        } else {
          console.log("Error getting data", response.data.status);
        }
        console.log("response:", response);
      });
  }, []);

  //reduces slides per view in our swiperslide based on window width
  const slidesPerView = () => {
    const aspect = [3100, 2600, 2200, 1800, 1450, 1100, 720, 400];
    for (let i = 0; i < aspect.length; i += 1) {
      if (width > aspect[i]) {
        return aspect.length - i;
      }
    }
  };
  const Next = () => {
    return <button>next</button>;
  };
  return (
    <div className="home-news-container">
      <h4>check out other news article relates to climate change</h4>
      <div className="swiper-news-container">
        <Swiper
          modules={[Pagination, Navigation, Mousewheel]}
          mousewheel={{
            forceToAxis: true
          }}
          pagination={{
            clickable: true
          }}
          slidesPerView={slidesPerView()}
          className="news-swiper"
          spaceBetween={1}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
        >
          {data.map((article, id) => {
            return (
              <SwiperSlide key={id} className="news-slides">
                <NewsCard article={article} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className="swiper-controls swiper-controls-prev"
          ref={navigationPrevRef}
        >
          <ArrowBackIosNewIcon />
        </button>

        <button
          className="swiper-controls swiper-controls-next"
          ref={navigationNextRef}
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
};

export default HomeNews;
