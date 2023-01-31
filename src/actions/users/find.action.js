module.exports = {

  name: 'Find by ID',

  description: 'Retrieve one user',

  middlewares: ['Auth'],

  method: 'GET',

  route: 'find/:id',

  fn: (ctx) => (req, res) => {

    const { errors: { UnauthorizedError } } = ctx
    throw new UnauthorizedError

    return res.send('find ' + req.params.id)

  }

}
