const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");


const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];

const options = {
    origin: allowedOrigins
};
// app.use(cors);
app.options('*', cors())

app.get("/", cors(options), (req, res) => {
  res.send("Hello World!");
});

app.get("/orgEvents/all", cors(options), (req, res) => {
  const orgEvents = [
    {
      name: "Fake Event 1",
      location: "Way down yonder",
      description: "A real hoedown",
    },
    {
      name: "Fake Event 2",
      location: "Kentucky",
      description: "Finger lickin good time",
    },
    {
      name: "Fake Event 3",
      location: "Canada",
      description: "Oh Canada, where they are afraid of the dark",
    },
  ];
  res.send(orgEvents);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
