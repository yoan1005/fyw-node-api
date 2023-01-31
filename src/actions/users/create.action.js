module.exports = {

  name: 'Create an User',

  description: 'Create an User',

  middlewares: false,

  method: 'POST',

  route: 'create',

  fn: (ctx) =>  async (req, res) => {
    const { models: { User } } = ctx
    const user = await User.create({
      email: 'demo@demo.fr',
      firstname: 'demo',
      lastname: 'demo'
    })
    return res.send('created ' + user.id)
  }

}
