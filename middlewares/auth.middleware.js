module.exports = {

  name: 'Auth',

  description: 'Check if user or bearer is in request',

  scope: 'route',

  order: 1,

  fn: (ctx) => async (req, res, next) => {
    let token = null
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
        token = req.query.token;
    }

    if (!token) return res.status(401).json({ error: 'Unauthorized.' })

    const { models: { User } } = ctx
    const user = await User.findOne()

    if (!user) return res.status(401).json({ error: 'Unauthorized.' })

    Object.assign(req, { user })

    next()
  }

}
