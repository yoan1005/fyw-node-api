class SocketError extends Error {
  constructor (status, message) {
    super(message)
    this.status = status;
  }

  handler = (error, req, res, next) => {
    return 'false'
  }
}
module.exports = SocketError
