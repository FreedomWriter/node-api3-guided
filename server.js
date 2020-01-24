const express = require("express"); // importing a CommonJS module
const helmet = require("helmet"); // npm i helmet
// const morgan = require("morgan"); // nmp i morgan
const logger = require("./middleware/logger");

const hubsRouter = require("./hubs/hubs-router.js");

const server = express();

server.use(express.json());

server.use(helmet());
server.use(logger());

// server.use(morgan("dev"));

server.use("/api/hubs", hubsRouter);

server.get("/", (req, res) => {
  const nameInsert = req.name ? ` ${req.name}` : "";

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
    `);
});

server.use((req, res) => {
  res.status(404).json({ message: "Route not found." });
});

server.use(greeter);

function greeter(req, res, next) {
  res.status(200).json({ hi: "there" });
}

// write a gatekeeper middleware that reads a password from the headers, if the password is "mellon", let the request continue, if the password is wrong, the return status code 401 and an object like this: { you: "shall not pass"}
function gatekeeper(req, res, next) {
  if (req.headers.password === "mellon") {
    next();
  } else {
    res.status(401).json({ You: "shall not pass!" });
  }
}

// build the echo middleware that will simply console.log the information in the body

function echo(req, res, next) {
  console.log(req.body);
  next();
}

module.exports = server;
