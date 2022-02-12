import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import {
  CardMedia,
  CardActionArea,
  Button,
  Typography,
  Card,
  CardContent
} from "@mui/material";
import useWindowDimensions from "../../assets/WindowDimensions";
import axios from "axios";

import "swiper/css/pagination";
import "swiper/css";

const HomeNews = () => {
  const [data, setData] = useState([]);
  const { width, heigth } = useWindowDimensions();

  const wrapText = (text) => {
    return text.slice(0, 100) + "...";
  };

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
        slidesPerView={width > 1200 ? 4 : 2}
        className="news-swiper"
      >
        {data.map((article, id) => {
          return (
            <SwiperSlide key={id}>
              {/* <div className="article-card">
                <img src={article.urlToImage} alt={`${article.title} url `} />
                <h5>{article.title}</h5>
                <h4>
                  <i>by </i>
                  {article.author}
                </h4>
                <p>{article.description}</p>
              </div> */}
              <Card sx={{ width: 300, height: 420 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={article.urlToImage}
                    alt="article headline photo"
                    sx={{
                      height: 200,
                      width: 400
                    }}
                  />
                  <CardContent>
                    <Typography variant="body1" sx={{ fontWeight: "900" }}>
                      {article.title}
                    </Typography>
                    <Typography variant="body2">
                      By <i>{article.author}</i>
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "12px"
                      }}
                    >
                      {article.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeNews;
