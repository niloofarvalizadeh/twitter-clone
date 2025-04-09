import React from 'react';
import { Card, Typography, List, ListItem, Button, Box } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const NewsItem = ({ title, pic, category, time, hashtag }) => (
  <ListItem
    sx={{
      p: 2,
      borderBottom: "1px solid #e1e8ed",
      transition: "background-color 0.3s ease",
      "&:hover": {
        backgroundColor: "#E8F5FE",
        cursor: "pointer",
      },
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box sx={{ maxWidth: "75%" }}>
        <Typography sx={{ color: "#8899a6", fontSize: 14 }}>
          {category} • {time}
        </Typography>
        <Typography sx={{ fontWeight: 700, fontSize: 15, mb: 0.5 }}>
          {title}
        </Typography>
        <Typography
          sx={{ fontSize: 12, color: "#1DA1F2", transition: "color 0.3s ease" }}
        >
          Trending with{" "}
          <a
            href={`https://twitter.com/hashtag/${hashtag.substring(1)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#1DA1F2",
              textDecoration: "none",
              fontWeight: 500,
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#0d8ddf")}
            onMouseLeave={(e) => (e.target.style.color = "#1DA1F2")}
          >
            {hashtag}
          </a>
        </Typography>
      </Box>
      <img
        src={pic}
        alt={title}
        className="w-[71px] h-[69px] rounded object-cover"
      />
    </Box>
  </ListItem>
);

export default function News (){
  const items = [
    {
      id: 1,
      title: "England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic",
      pic: "/images/1.jpg",
      category: "COVID19",
      time: "Last night",
      hashtag: "#covid19",
    },
    {
      id: 2,
      title: "Parler may go offline following suspensions by Amazon, Apple and Google",
      pic: "/images/2.jpg",
      category: "US news",
      time: "4h ago",
      hashtag: "#trump",
    },
    {
      id: 3,
      title: "India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test",
      pic: "/images/3.jpg",
      category: "India",
      time: "1h ago",
      hashtag: "#sport",
    },
  ];

  return (
    <Box className="h-[457px] w-[350px]">
      <Card
        sx={{ borderRadius: "15px", backgroundColor: "#F7F9FA" }}
        elevation={0}
      >
        <Typography sx={{ p: 2, fontWeight: 700, fontSize: 20 }}>
          What's happening
        </Typography>

        <List>
          {items.map((item) => (
            <NewsItem key={item.id} {...item} />
          ))}
        </List>

        <Box sx={{ textAlign: "center", p: 1 }}>
          <Button
            endIcon={<ExpandMoreIcon />}
            sx={{
              color: "#1DA1F2",
              fontWeight: 600,
              textTransform: "none",
              backgroundColor: "transparent",
              transition: "all 0.3s ease",
              borderRadius: "30px",
              px: 2,
              py: 1,
              "&:hover": {
                transform: "scale(1.07)",
              },
            }}
          >
            Show more
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

