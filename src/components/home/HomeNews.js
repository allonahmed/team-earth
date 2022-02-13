import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel, Keyboard } from "swiper";
import useWindowDimensions from "../../assets/WindowDimensions";
import DayConvertor from "../../assets/DayConvertor";
import NewsCard from "./NewsCard";
import axios from "axios";

import "swiper/css/pagination";
import "swiper/css";

const HomeNews = () => {
  const [data, setData] = useState([]);
  const { width, heigth } = useWindowDimensions();

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
    if (width > 1450) {
      return 4;
    } else if (width > 1100) {
      return 3;
    } else if (width > 720) {
      return 2;
    } else if (width > 400) {
      return 1;
    }
  };

  return (
    <div className="home-news-container">
      <h4>check out other news article relates to climate change</h4>
      <Swiper
        modules={[Autoplay, Pagination, Mousewheel, Keyboard]}
        mousewheel={{
          forceToAxis: true
        }}
        keyboard={true}
        pagination={{
          clickable: true
        }}
        slidesPerView={slidesPerView()}
        className="news-swiper"
      >
        {data.map((article, id) => {
          return (
            <SwiperSlide key={id} className="news-slides">
              <NewsCard article={article} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeNews;
