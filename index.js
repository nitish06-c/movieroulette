import express from 'express';
//const express = require('express');
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const API_SK = 'https://imdb-api.com/en/API/Keyword/';
const API_KEY = process.env.API_KEY;

app.get(express.json());

app.get('/', (req,res) => {
    res.send('Home Directory');
});

// async fetch

const get_data = async url => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      //console.log(json);
      return json;
    } catch (error) {
      console.log(error);
    }
  };

app.get('/fight', async (req,res) => {
    const url = API_SK + API_KEY + '/fight';
    const data = await get_data(url);
    const item = data.items;
    //console.log(item);
    const movie = item[Math.floor(Math.random() * item.length)];
    console.log(movie);
    res.send(movie);
});

app.get('/comedy', (req, res) => {
    res.send('COMEDY');
});

app.get('/drama', async (req, res) => {
    const url = API_SK + API_KEY + '/dramas';
    const data = await get_data(url);
    const item = data.items;
    //console.log(item);
    const movie = item[Math.floor(Math.random() * item.length)];
    console.log(movie);
    res.send(movie);
});

app.get('/fantasy', (req, res) => {
    res.send('FANTASY');
});
app.get('/horror', (req, res) =>{
    res.send('HORROR');
});
app.get('/romance', (req, res) => {
    res.send('ROMANCE');
});
 
app.listen(PORT, () => console.log(`Server is running on port: http:localhost:${PORT}`));
