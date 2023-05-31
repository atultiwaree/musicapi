const express = require("express");
const app = express();
const http = require("http");
const morgan = require("morgan");
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
require("dotenv").config();

const track = [
  {
    id: 0,
    url: "https://shridaan.com/music/Don%27t-Hate-Me.mp3",
    title: "Don't Hate Me",
    artwork: "https://shridaan.com/music/Don%27t-Hate-Me.jpg",
  },
  {
    id: 1,
    url: "https://shridaan.com/music/I%27ve-Been-Let-Down.mp3",
    title: "I've been let down",
    artwork: "https://shridaan.com/music/I%27ve-Been-Let-Down.jpg",
  },
  {
    id: 2,
    url: "https://shridaan.com/music/I-m-Not-Worth-It.mp3",
    title: "I'm not worth it",
    artwork: "https://shridaan.com/music/I-m-Not-Worth-It.jpg",
  },
  {
    id: 3,
    url: "https://shridaan.com/music/Neffex-Messed-Up.mp3",
    title: "Messed Up",
    artwork: "https://shridaan.com/music/Neffex-Messed-Up.jpg",
  },

  {
    id: 4,
    url: "https://shridaan.com/music/New-Beginnings-Remix.mp3",
    title: "New Beginnings Remix",
    artwork: "https://shridaan.com/music/New-Beginnings-Remix.jpg",
  },
  {
    id: 5,
    url: "https://shridaan.com/music/Somtimes.mp3",
    title: "Sometimes",
    artwork: "https://shridaan.com/music/Sometimes.jpg",
  },

  {
    id: 6,
    url: "https://shridaan.com/music/Space.mp3",
    title: "Space",
    artwork: "https://shridaan.com/music/Space.jpg",
  },

  {
    id: 7,
    url: "https://shridaan.com/music/Time.mp3",
    title: "Time",
    artwork: "https://shridaan.com/music/Time.jpg",
  },

  {
    id: 8,
    url: "https://shridaan.com/music/Unavailable.mp3",
    title: "Unavailable",
    artwork: "https://shridaan.com/music/Unavailable.jpg",
  },

  {
    id: 9,
    url: "https://shridaan.com/music/WOW.mp3",
    title: "WOW",
    artwork: "https://shridaan.com/music/WOW.jpg",
  },

  {
    id: 10,
    url: "https://shridaan.com/music/Anxiety.mp3",
    title: "Anxiety",
    artwork: "https://shridaan.com/music/Anxiety.jpg",
  },

  {
    id: 11,
    url: "https://shridaan.com/music/Damm-Girl.mp3",
    title: "Damm Girl",
    artwork: "https://shridaan.com/music/Damm-Girl.jpg",
  },

  {
    id: 12,
    url: "https://shridaan.com/music/Dance-Again.mp3",
    title: "Dance Again",
    artwork: "https://shridaan.com/music/Dance-Again.jpg",
  },

  {
    id: 13,
    url: "https://shridaan.com/music/Get-Out-My-Way.mp3",
    title: "Get Out My Way",
    artwork: "https://shridaan.com/music/Get-Out-My-Way.jpg",
  },

  {
    id: 14,
    url: "https://shridaan.com/music/Legendary.mp3",
    title: "Legendary",
    artwork: "https://shridaan.com/music/Legendary.jpg",
  },

  {
    id: 15,
    url: "https://shridaan.com/music/Life.mp3",
    title: "Life",
    artwork: "https://shridaan.com/music/Life.jpg",
  },

  {
    id: 16,
    url: "https://shridaan.com/music/Rumors.mp3",
    title: "Rumors",
    artwork: "https://shridaan.com/music/Rumors.jpg",
  },
  {
    id: 17,
    url: "https://shridaan.com/music/Cold.mp3",
    title: "Cold",
    artwork: "https://shridaan.com/music/Cold.jpg",
  },
  {
    id: 18,
    url: "https://shridaan.com/music/Grateful.mp3",
    title: "Grateful",
    artwork: "https://shridaan.com/music/Grateful.jpg",
  },
  {
    id: 19,
    url: "https://shridaan.com/music/Pro.mp3",
    title: "Pro",
    artwork: "https://shridaan.com/music/Pro.jpg",
  },
  {
    id: 20,
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
