const { mongoose } = require('../config/database')
const { Schema } = mongoose

const schema = new Schema({
  firstname: String,
  lastname: String,
  email: String
}, {
  timestamps: true
})

module.exports = mongoose.model('User', schema)
