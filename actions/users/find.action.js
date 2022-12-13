module.exports = {

  name: 'Find by ID',

  description: 'Retrieve one user',

  middleware: false,

  method: 'GET',

  route: 'find/:id',

  fn: (ctx) => (req, res) => {
    console.log('ctx', ctx)
    return res.send('find ' + req.params.id)
  }

}
