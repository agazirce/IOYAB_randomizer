const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors({'Access-Control-Allow-Origin':'*'}))

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Ioweuabeer Api." });
});

require("./routes/random.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT_SERVER || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
