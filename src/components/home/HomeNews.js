import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import {
  CardMedia,
  CardActionArea,
  Typography,
  Card,
  CardContent
} from "@mui/material";
import useWindowDimensions from "../../assets/WindowDimensions";
import axios from "axios";

import "swiper/css/pagination";
import "swiper/css";
import DayConvertor from "../../assets/DayConvertor";

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
  console.log(data);

  //convert url to domain name for edge case where there are no authors for news article
  const urlToDomain = (url) => {
    let domain = new URL(url);
    return domain.hostname.replace("www.", "");
  };

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
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true
        }}
        slidesPerView={slidesPerView()}
        className="news-swiper"
      >
        {data.map((article, id) => {
          return (
            <SwiperSlide key={id} className="news-slides">
              <Card
                sx={{
                  width: 300,
                  height: 420,
                  boxShadow: "2px 2px 10px 3px rgba(0,0,0,0.3)"
                }}
              >
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
                    {article.author === null ? (
                      <Typography variant="body2">
                        By <i>{urlToDomain(article.url)}</i> on{" "}
                        <b>{article.publishedAt.slice(0, 10)}</b>
                      </Typography>
                    ) : (
                      <Typography variant="body2">
                        By <i>{article.author}</i> on{" "}
                        <b>{article.publishedAt.slice(0, 10)}</b>
                      </Typography>
                    )}
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={{
                        fontSize: "12px",
                        maxHeight: 100
                      }}
                      mt={1}
                      // paragraph={true}
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
