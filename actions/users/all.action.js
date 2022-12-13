module.exports = {

  name: 'All',

  description: 'Retrieve all users',

  middleware: false,

  method: 'GET',

  route: 'all',

  fn: (ctx) => (req, res) => {
    return res.send('all')
  }

}
