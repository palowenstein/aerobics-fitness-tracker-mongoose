// Requires express module (middleware, HTTPs GET/POST/DELETE req. between REST APIs)
const express = require("express");

// Requires mongoose for mongoDB database connection
const mongoose = require("mongoose");

// Requires Morgan, logger middleware for Node -> https://github.com/expressjs/morgan
const logger  = require("morgan");

// Sets the ENV port for Heroku | 4000 for local host
const PORT = process.env.PORT || 4000;

// Express is attributed to const app
const app = express();

// Morgan Logger Middleware: automated logging of requests, responses and related data.
/* When added as middleware to an express/connect app, by default it logs statements to:
 stdout showing details of: remote ip, request method, http version, response status, user agent etc.
 Allows log modification using tokens or add color to them by defining 'dev' or even logging out to an output stream, like a file. */
app.use(logger("dev")); 

/* Express middleware function. Data Parsing.
Parses incoming requests w/ urlencoded payloads (derived from body-parser). */
app.use(express.urlencoded({ extended: true }));

/* Express middleware function. Data Parsing.
Parses incoming requests w/ JSON payloads (also derived from body-parser). */
app.use(express.json());

/* app.use(express.static("public")); Express (static) middleware function.
Serves static files (based on serve-static) from the «public» directory. */
app.use(express.static("public"));

// Open a connection to aerobics database. MONGODB_URI for Heroku deployment. localhost for local dev.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/aerobics", {
  useNewUrlParser: true,
  
/*   Allow users to fall back to the old parser if they find a bug in the new parser
  Must specify a port in your connection string, like mongodb://localhost:27017/dbname.
  The new url parser does not support connection strings that do not have a port,
  like mongodb://localhost/dbname. */
  
  useFindAndModify: false, // default: true
  useUnifiedTopology: true // default: false

/* 
  useCreateIndex: true, // default: false
  autoIndex: false */

/*   autoIndex - By default, mongoose will automatically build indexes defined in your schema when it connects.
  This is great for development, but not ideal for large production deployments,
  because index builds can cause performance degradation.
  If you set autoIndex to false, mongoose will not automatically build indexes for any model associated with this connection. */

});

// routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

// port Listen + Console log
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


/* For Reference: Act#26 Wk17
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
}); */
