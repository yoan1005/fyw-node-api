const { app , port, $config } = require('../config/server')

app.listen(port, () => {
  console.log(`[✔] Server: Running… OK (127.0.0.1:${port}) [✔]`)
})


module.exports = { app, $config }
