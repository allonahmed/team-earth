import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import axios from "axios";

import "swiper/css/pagination";
import "swiper/css";

const HomeNews = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_NEWS_URL}${process.env.REACT_APP_NEWS_KEY}`)
      .then((response) => {
        setData(response.data.articles);
      });
  }, []);

  return (
    <div className="home-news-container">
      <h4>check out other news article relates to climate change</h4>
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true
        }}
        slidesPerView={3}
        className="mySwiper"
      >
        {data.map((article, id) => {
          return (
            <SwiperSlide key={id}>
              <div className="article-card">
                <img src={article.urlToImage} alt={`${article.title} url `} />
                <h5>{article.title}</h5>
                <h4>
                  <i>by </i>
                  {article.author}
                </h4>
                <p>{article.description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeNews;
