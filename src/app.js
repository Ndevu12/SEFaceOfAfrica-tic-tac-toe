import express from "express";
// import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from './startups/DBConnection.js';
import { Documentation } from "./startups/APIs_Docs.js";
import Route from "./routes/index.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// cookie-parser middleware
app.use(cookieParser());

app.use("/", Route);

// Set up mongoose connection
connectDb();

// SWAGGER DOCS
Documentation();

app.get("/", (req, res) => {
  res.status(200).send(`
    <html>
      <head>
        <title>Tic Tac Toe Game</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="<KEY>" crossorigin="anonymous">
      </head>
      <body>
        <div class="container" style.margin-top=20px>
          <div class="jumbotron">
            <h1 class="display-4">Welcome to Tic Tac Toe Game API</h1>
            <br><h2>Tic Tac Toe Game, SE Face of Africa Challenge</h2>
            <p class="lead">Use the following Endpoints to interact with the API:</p>
            <hr class="my-4">
            <ul>
            <li>List of APIs</li>
            <li>List of APIs</li>
            <li>List of APIs</li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  `);
});

// Start the server
const PORT = Number(process.env.PORT) || 6090;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { app };