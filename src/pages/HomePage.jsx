import React from 'react';
import {Button, Typography} from "@mui/material";

const HomePage = () => {
    return (
        <div className={'home'}>
            <Typography variant={'title'}> Мультифункціональна платформа</Typography>
            <br/>
            <Typography variant={'title'}>від айтішників для айтішників</Typography>
            <br/>
            <Typography color={'error'}>error</Typography>
            <Typography variant={'aboutTitle'}> Як це працює</Typography>
            <Typography variant={'subtitle'}> Привет</Typography>
            <Button variant="contained" color={'primary'}>Outlined</Button>
        </div>
    );
};

export default HomePage;
