import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import chatRoutes from "./routes/chatRoutes.js";
import handleError from "./utilities/handleError.js";

// declare variables
const app = express();
const PORT = process.env.PORT || 5000;

// setup
app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// default route
app.get("/", (req, res) => {
  res.send("Welcome to Gumzo Backend! Interact with the app at https://gumzoai.web.app/ or explore these github repos: https://github.com/thecodeinfluencer/gumzo-backend  https://github.com/thecodeinfluencer/gumzo-frontend");
});

// declare routes
app.use("/api/v1/client/chat", chatRoutes);

// init app
app.listen(PORT, () => {
  handleError("listening on PORT", PORT);
});
