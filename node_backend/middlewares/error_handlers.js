//Handling error for invalid api requests
const notFound = (req, res, next) => {
  const error = new Error(
    `Endpoint ${req.originalUrl} does not exist, are you supposed to be here??👀👀`
  );

  //Set the response status
  res.status(404);

  next(error);
};

const errorHandler = (error, req, res, next) => {
  //check the status code of the error messages
  const status = res.statusCode ? res.statusCode : 400;

  //Set the response status
  res.status(status);

  //Send the error message
  res.json({
    error: error.message,
    stack: process.env.NODE_ENV === "development" ? error.stack : null,
  });
  next();
};

module.exports = { errorHandler, notFound };
