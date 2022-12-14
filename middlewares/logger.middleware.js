module.exports = {

  name: 'Logger',

  description: 'Logger',

  scope: 'route',

  order: 0,

  fn: (ctx) => (req, res, next) => {
    next()
  }

}
