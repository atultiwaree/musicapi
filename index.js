const express = require("express");
const app = express();
const http = require("http");
const morgan = require("morgan");
const server = http.createServer(app);
const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 3000;
require("dotenv").config();

 const track = [
   {
     id: 0,
     url: "https://shridaan.com/music/Desperate.mp3",
     title: "Neffex - Desperate",
     artwork: "https://shridaan.com/music/Desperate.jpg",
   },
   {
     id: 1,
     url: "https://shridaan.com/music/Don%27t-Hate-Me.mp3",
     title: "Don't Hate Me",
     artwork: "https://shridaan.com/music/Don%27t-Hate-Me.jpg",
   },
   {
     id: 2,
     url: "https://shridaan.com/music/Life of an entrepreneur.mp3",
     title: "Ft. Life of an entrepreneur",
     artwork: "https://shridaan.com/music/Life of an entrepreneur.jpg",
   },
   {
     id: 3,
     url: "https://shridaan.com/music/I%27ve-Been-Let-Down.mp3",
     title: "I've been let down",
     artwork: "https://shridaan.com/music/I%27ve-Been-Let-Down.jpg",
   },
   {
     id: 4,
     url: "https://shridaan.com/music/A Place For Me.mp3",
     title: "A Place For Me",
     artwork: "https://shridaan.com/music/A Place For Me.jpg",
   },
   {
     id: 5,
     url: "https://shridaan.com/music/At The Top.mp3",
     title: "At The Top",
     artwork: "https://shridaan.com/music/At The Top.jpg",
   },
   {
     id: 6,
     url: "https://shridaan.com/music/Before I Am Gone.mp3",
     title: "Before I Am Gone",
     artwork: "https://shridaan.com/music/Before I Am Gone.jpg",
   },
   {
     id: 7,
     url: "https://shridaan.com/music/Big Swing.mp3",
     title: "Big Swing",
     artwork: "https://shridaan.com/music/Big Swing.jpg",
   },
   {
     id: 8,
     url: "https://shridaan.com/music/Choose It.mp3",
     title: "Choose It",
     artwork: "https://shridaan.com/music/Choose It.jpg",
   },
   {
     id: 9,
     url: "https://shridaan.com/music/Conviction.mp3",
     title: "Conviction",
     artwork: "https://shridaan.com/music/Conviction.jpg",
   },
   {
     id: 10,
     url: "https://shridaan.com/music/Inside.mp3",
     title: "Inside",
     artwork: "https://shridaan.com/music/Inside.jpg",
   },
   {
     id: 11,
     url: "https://shridaan.com/music/Leading.mp3",
     title: "Leading",
     artwork: "https://shridaan.com/music/Leading.jpg",
   },
   {
     id: 12,
     url: "https://shridaan.com/music/Made For This.mp3",
     title: "Made For This",
     artwork: "https://shridaan.com/music/Made For This.jpg",
   },
   {
     id: 13,
     url: "https://shridaan.com/music/Potus.mp3",
     title: "Potus",
     artwork: "https://shridaan.com/music/Potus.jpg",
   },
   {
     id: 14,
     url: "https://shridaan.com/music/Purpose.mp3",
     title: "Purpose",
     artwork: "https://shridaan.com/music/Purpose.jpg",
   },
   {
     id: 15,
     url: "https://shridaan.com/music/Rise.mp3",
     title: "Rise",
     artwork: "https://shridaan.com/music/Rise.jpg",
   },

   {
     id: 16,
     url: "https://shridaan.com/music/The Rain.mp3",
     title: "The Rain",
     artwork: "https://shridaan.com/music/The Rain.jpg",
   },
   {
     id: 17,
     url: "https://shridaan.com/music/Victorious.mp3",
     title: "Victorious",
     artwork: "https://shridaan.com/music/Victorious.jpg",
   },
   {
     id: 18,
     url: "https://shridaan.com/music/I-m-Not-Worth-It.mp3",
     title: "I'm not worth it",
     artwork: "https://shridaan.com/music/I-m-Not-Worth-It.jpg",
   },
   {
     id: 19,
     url: "https://shridaan.com/music/Neffex-Messed-Up.mp3",
     title: "Messed Up",
     artwork: "https://shridaan.com/music/Neffex-Messed-Up.jpg",
   },

   {
     id: 20,
     url: "https://shridaan.com/music/New-Beginnings-Remix.mp3",
     title: "New Beginnings Remix",
     artwork: "https://shridaan.com/music/New-Beginnings-Remix.jpg",
   },
   {
     id: 21,
     url: "https://shridaan.com/music/Somtimes.mp3",
     title: "Sometimes",
     artwork: "https://shridaan.com/music/Sometimes.jpg",
   },

   {
     id: 22,
     url: "https://shridaan.com/music/Space.mp3",
     title: "Space",
     artwork: "https://shridaan.com/music/Space.jpg",
   },

   {
     id: 23,
     url: "https://shridaan.com/music/Time.mp3",
     title: "Time",
     artwork: "https://shridaan.com/music/Time.jpg",
   },

   {
     id: 24,
     url: "https://shridaan.com/music/Unavailable.mp3",
     title: "Unavailable",
     artwork: "https://shridaan.com/music/Unavailable.jpg",
   },

   {
     id: 25,
     url: "https://shridaan.com/music/WOW.mp3",
     title: "WOW",
     artwork: "https://shridaan.com/music/WOW.jpg",
   },

   {
     id: 26,
     url: "https://shridaan.com/music/Anxiety.mp3",
     title: "Anxiety",
     artwork: "https://shridaan.com/music/Anxiety.jpg",
   },

   {
     id: 27,
     url: "https://shridaan.com/music/Damm-Girl.mp3",
     title: "Damm Girl",
     artwork: "https://shridaan.com/music/Damm-Girl.jpg",
   },

   {
     id: 28,
     url: "https://shridaan.com/music/Dance-Again.mp3",
     title: "Dance Again",
     artwork: "https://shridaan.com/music/Dance-Again.jpg",
   },

   {
     id: 29,
     url: "https://shridaan.com/music/Get-Out-My-Way.mp3",
     title: "Get Out My Way",
     artwork: "https://shridaan.com/music/Get-Out-My-Way.jpg",
   },

   {
     id: 30,
     url: "https://shridaan.com/music/Legendary.mp3",
     title: "Legendary",
     artwork: "https://shridaan.com/music/Legendary.jpg",
   },

   {
     id: 31,
     url: "https://shridaan.com/music/Life.mp3",
     title: "Life",
     artwork: "https://shridaan.com/music/Life.jpg",
   },

   {
     id: 32,
     url: "https://shridaan.com/music/Rumors.mp3",
     title: "Rumors",
     artwork: "https://shridaan.com/music/Rumors.jpg",
   },
   {
     id: 33,
     url: "https://shridaan.com/music/Cold.mp3",
     title: "Cold",
     artwork: "https://shridaan.com/music/Cold.jpg",
   },
   {
     id: 34,
     url: "https://shridaan.com/music/Grateful.mp3",
     title: "Grateful",
     artwork: "https://shridaan.com/music/Grateful.jpg",
   },
   {
     id: 35,
     url: "https://shridaan.com/music/Pro.mp3",
     title: "Pro",
     artwork: "https://shridaan.com/music/Pro.jpg",
   },
   {
     id: 36,
     url: "https://shridaan.com/music/Unstoppable.mp3",
     title: "Unstoppable",
     artwork: "https://shridaan.com/music/Unstoppable.jpg",
   },
 ];


app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.status(200).json({ success : true, message : "Working fine!" }));
app.get("/musiclist", (req, res) => res.status(200).json({ data: track }));

server.listen(PORT, (err) => (!err ? console.log(`✔ Node Listening to http://localhost:${PORT}`) : console.log("There was some error ", err.message)));
