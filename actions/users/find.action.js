module.exports = {

  name: 'Find by ID',

  description: 'Retrieve one user',

  middlewares: ['Auth'],

  method: 'GET',

  route: 'find/:id',

  fn: (ctx) => (req, res) => {
    return res.send('find ' + req.params.id)
  }

}
