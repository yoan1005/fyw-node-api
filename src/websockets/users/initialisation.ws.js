module.exports = {

  event: 'initialisation',

  name: 'Initialisation of the user',

  prefix: 'users',

  room: false,

  fn: async (ctx, socket, payload) => {
    
    socket.emit("users:initialisation", 'COMPLETED')

  }

}
