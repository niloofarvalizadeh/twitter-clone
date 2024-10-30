import React from 'react';
import { Avatar, Card, CardContent, CardMedia, Typography } from '@mui/material';
import TweetActions from './TweetActions';

const Tweet = () => {
    return (
        <Card sx={{ maxWidth: 600, margin: '20px auto', borderRadius: '3px' }}>
            {/* Header Section: Profile Image and Tweet Details */}
            <CardContent sx={{ display: 'flex', alignItems: 'flex-start' }}>

                {/* Profile Image */}

                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    <Avatar alt="User Avatar" src="/path/to/avatar.jpg" style={{ width:'49px', height:'49px' ,marginRight: '8px'}}/>
                </a>

                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    {/* User Info */}
                    
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="subtitle1" component="div" fontWeight="bold" sx={{ marginRight: '8px' }}>
                            Niloofar Valizadeh
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            @Valizadeh · 23s
                        </Typography>
                    </div>

                    {/* Tweet Text */}
                    <Typography variant="body1" sx={{ marginTop: '4px' }}>
                        Hold on I need at least a few minutes!
                    </Typography>

                    {/* Tweet Image */}
                    <CardMedia
                        component="img"
                        height="200"
                        width="100%"
                        image="/images/tweetimg.jpg"
                        alt="Tweet image"
                        sx={{ marginTop: '8px', borderRadius: '8px' }}
                    />
                </div>
            </CardContent>

            {/* Tweet Actions */}
            <TweetActions />

            {/* Show thread */}
            <CardContent sx={{ paddingTop: 0 }}>
                <Typography variant="body2" color="primary">
                    Show this thread
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Tweet;
