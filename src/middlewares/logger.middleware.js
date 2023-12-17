module.exports = {

  name: 'Logger',

  description: 'Logger',

  scope: 'error',

  order: 9,

  fn: (ctx) => (error, req, res, next) => {
    console.error('\x1b[31m', '-- Error Handling - Path: ' + req.path + ' --')
     if (error.message) {
       console.error('\x1b[31m', `[${error.statusCode}] ${error.message}`)
     }
     console.error('\x1b[31m', '-- --')
     if (error.hasOwnProperty('handler')) {
     return error.handler(error, req, res, next)
    } else {
      res.header('Content-Type', 'application/json')
      return res.status(error.statusCode).send({ message: 'Server error - check server console' })
    }
  }

}
