const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const dotenv = require("dotenv");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

/* Load environment variables from .env file, where API keys and passwords are configured.*/
dotenv.load({ path: ".env" });

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/newsScraperReact",
  {
    useMongoClient: true
  }
)
.catch(err => {
  console.log("Database not running");
  console.log(err);
});


app.use(express.static("client/build"));


app.use(routes);

app.listen(PORT, () => {
  console.log(
    `API Server now listening on PORT http://localhost:${PORT}!`
  );
});