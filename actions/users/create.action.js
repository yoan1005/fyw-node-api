module.exports = {

  name: 'Create an User',

  description: 'Create an User',

  middleware: false,

  method: 'get',

  route: 'create',

  fn: (ctx) => (req, res) => {
    const { models: { User } } = ctx
    console.log('User', new User)
    return res.send('find ' + req.params.id)
  }

}
