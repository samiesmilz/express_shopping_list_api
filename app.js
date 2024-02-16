const express = require("express");
const ExpressError = require("./ExpressError");
const itemRoutes = require("./itemRoutes");
const app = express();

// Return JSON and receive request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
///////////////////// routes handling ///////////////////
*/

// bind
app.use("/items", itemRoutes);

// Handle edge cases where route is not found
app.use(function (req, res, next) {
  const notFound = new ExpressError("OOps - Not Found!", 404);
  return next(notFound);
});

/*
///////////////////// global error handler ///////////////////
*/

function handleErrors(error, req, res, next) {
  let message = error.message;
  let status = error.status || 500; // Set the defualt error

  // set the status and alert the user
  return res.status(status).json({
    error: {
      message,
      status,
    },
  });
}
//  Handle all error globally
app.use(handleErrors);

/*
///////////////////// exports ///////////////////
*/

module.exports = app;
