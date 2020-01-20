module.exports = (req, res, next) => {
  if (typeof req.body.name === "string") {
    req.body.name = req.body.name.toUpperCase();
    next();
  } else {
    res.status(400).json({ errorMessage: "The name should be a string." });
  }
};

// write a middleware called uppercaser that takes the name from the body and makes it uppercase before it makes it to the request hanlder/router. Only apply that middleware to routes that begin with /api/hubs and only on POST and PUT

// function uppercaser(req, res, next) {
//     if (typeof req.body.name === "string") {
//       req.body.name = req.body.name.toUpperCase();
//       next();
//     } else {
//       res.status(400).json({ errorMessage: "The name should be a string." });
//     }
//   }
