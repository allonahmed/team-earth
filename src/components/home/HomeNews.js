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
      .get(
        `https://newsapi.org/v2/everything?q=apple&from=2022-02-08&to=2022-02-08&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS}`
      )
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
