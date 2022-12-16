class HttpError extends Error {
  constructor(message, statusCode = 500) {
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
module.exports = HttpError
