
const { run } = require('../config/database')

run()
  .then(() => {
    console.log(`[✔] Database: Running… OK [✔]`)
  })
  .catch(err => {
    console.log(`[✗] Database: Error…  [✗]`)
    throw new Error(`${err}`)
  })
