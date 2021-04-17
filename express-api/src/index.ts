import express from "express";
import cors from "cors";

const app = express();
const port = 8080;
const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];

const options: cors.CorsOptions = {
    origin: allowedOrigins
};
app.use(cors(options));
app.options('*', cors)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/orgEvents/all", (req, res) => {
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
