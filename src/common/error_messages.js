const errors = {};

errors.state500 = {
  message: "Error with the server",
  statusCode: 500,
  error: "Show console",
};

errors.state400 = {
  message: "It's not possible!",
  statusCode: 400,
  data: {},
};

errors.state300 = {
    message: "NOT Modified!",
    statusCode: 304,
    data: {},
  };
module.exports = errors;