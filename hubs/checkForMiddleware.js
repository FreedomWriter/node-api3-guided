module.exports = prop => (req, res, next) => {
  req.body[prop]
    ? next()
    : res.status(400).json({ errorMessage: `required ${prop}` });
};

// write a middleware called checkFor that takes the name of a property and checks that the body has that property. If the property is not there, respond with a status code 400 and an object like this { errorMessage: `required ${property}`} where property is what we're validating. If we use it like this: checkFor('age) the message will read "required age", use it on the POST and PUT to check that the body has the "name" property

// function checkFor(prop) {
//   return function(req, res, next) {
//     if (req.body[prop]) {
//       next();
//     } else {
//       res.status(400).json({ errorMessage: `required ${prop}` });
//     }
//   };
// }
