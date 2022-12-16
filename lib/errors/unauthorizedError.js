class UnauthorizedError extends Error {
  constructor(message = "This request is protected by authentification", statusCode = 401) {
    super();
    this.name = this.constructor.name // good practice
    this.message = message
    this.statusCode = statusCode
  }

  handler = (error, req, res, next) => {
    res.header('Content-Type', 'application/json')
    return res.status(error.statusCode).send(JSON.stringify(error, null, 4)) // pretty print
  }
}
module.exports = UnauthorizedError
