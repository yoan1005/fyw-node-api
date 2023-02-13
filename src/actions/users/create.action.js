module.exports = {

  name: 'Create an User',

  description: 'Create an User',

  middlewares: false,

  method: 'POST',

  route: 'create',

  fn: (ctx) =>  async (req, res) => {
    const { models: { User }, validator } = ctx
    const valid = validator.validate(req.body, {
      'name': {
        required: true
      },
      'email': {
        required: true,
        isEmail: {},
        contains: '@gmail'
      }
    }, {
      name: {
        required: "Le champs nom est requis"
      },
      email: {
        required: "Le champs nom est requis",
        isEmail: "Le champs email doit être un email",
        contains: "Le champs email doit contenir @gmail"
      }
    })

    console.log('valiid', valid)
    const user = await User.create(req.body)
    return res.send('created ' + user.id)
  }

}
