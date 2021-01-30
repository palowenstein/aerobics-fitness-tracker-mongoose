// Requires Express Router to handle requests, case sensitive if using camel cases
const htmlNetwork = require("express").Router({caseSensitive: true});

// Requires path moduel to access and interact with the file system
const path = require("path");

// htmlNetwork (routes)

// Transfers to main page (top level)
htmlNetwork.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"))
});

// Transfers to Exercise page (1st iteration: New Workout / 2nd iteration & more: Create / Continue Workout)
htmlNetwork.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// Transfers to Stats page (formerly dashboard)
htmlNetwork.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// export htmlNetwork module
module.exports = htmlNetwork;


/* For Reference: From Act#23 Wk18
const path = require('path');

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  });
  app.get('/topic', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/topic.html'));
  });
  app.get('/favorites', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/favorites.html'));
  });
}; */