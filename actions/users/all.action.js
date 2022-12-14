module.exports = {

  name: 'All',

  description: 'Retrieve all users',

  middlewares: false,

  method: 'GET',

  route: 'all',

  fn: (ctx) => (req, res) => {
    return res.send('all')
  }

}
