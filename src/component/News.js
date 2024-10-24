import React from 'react';
import { Card, Typography, List, ListItem, ListItemText, Avatar, Button, Box } from '@mui/material';

const News = () => {
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
    <div className='h-[457px] w-[350px]'>
      {/* header */}
      <Card sx={{ borderRadius: '15px', mb: 2, backgroundColor: '#EBEEF0' }}>
        <Typography sx={{ p: 2, fontWeight: 700, fontSize: '20px', height: '48px' }}>
          What's happening
        </Typography>

        {/* list */}
        <List>
          {items.map((item) => (
            <ListItem key={item.id} sx={{ display: 'flex', p: 2, borderBottom: '1px solid #e1e8ed' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <Box sx={{ maxWidth: '75%' }}>
                  <Typography sx={{ color: '#8899a6', fontSize: '14px' }}>
                    {item.category} • {item.time}
                  </Typography>
                  <Typography sx={{ fontWeight: 700, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: '12px', color: '#1DA1F2' }}>
                    Trending with{" "}
                    <a
                      href={`https://twitter.com/hashtag/${item.hashtag.substring(1)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-Primary-Blue"
                    >
                      {item.hashtag}
                    </a>
                  </Typography>
                </Box>
                <img src={item.pic} alt={item.title} className="w-[71px] h-[69px] rounded object-cover" />
              </Box>
            </ListItem>
          ))}
        </List>

        <Box sx={{ textAlign: 'center', p: 2 }}>
          <Button sx={{ color: '#1DA1F2' }}>Show more</Button>
        </Box>
      </Card>
    </div>
  );
};

export default News;
