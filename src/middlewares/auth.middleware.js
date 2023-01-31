module.exports = {

  name: 'Auth',

  description: 'Check if user or bearer is in request',

  scope: 'route',

  order: 1,

  fn: (ctx) => async (req, res, next) => {

    const { errors: { UnauthorizedError }, models: { User } } = ctx

    let token = null
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
        token = req.query.token;
    }
    
    try {

      if (!token) throw new UnauthorizedError

      const user = await User.findOne()
      if (!user) throw new UnauthorizedError

      Object.assign(req, { user })
      next()

    } catch (e) {
      next(e)
    }

  }

}
