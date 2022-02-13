import React, { useState } from "react";
import { CardMedia, Typography, Card, CardContent } from "@mui/material";

const NewsCard = ({ article }) => {
  const [isHovered, setHover] = useState(false);

  //convert url to domain name for edge case where there are no authors for news article
  const urlToDomain = (url) => {
    let domain = new URL(url);
    return domain.hostname.replace("www.", "");
  };

  return (
    <Card
      sx={{
        width: 300,
        height: 420,
        boxShadow: "2px 2px 10px 3px rgba(0,0,0,0.3)"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {
        <button
          className="hovered"
          style={isHovered ? { display: "flex" } : { display: "none" }}
          onClick={() => window.open(article.url, "_blank")}
        >
          {" "}
          Click to View Article
        </button>
      }
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
    </Card>
  );
};

export default NewsCard;
