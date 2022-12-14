module.exports = {

  name: 'Security',

  description: 'Check an internal token is passed in all request, the token should be an SHA1 string',

  scope: 'app',

  order: 0,

  fn: (ctx) => async (req, res, next) => {

    const { headers: { internaltoken = false } } = req

    if (internaltoken && internaltoken.length === 40) {
      if (ctx.$config.INTERNAL_TOKEN === internaltoken) {
        return next()
      }
    }

    return res.status(401).json({ error: 'Unauthorized.' })

  }

}
