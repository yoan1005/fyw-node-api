const moment = require('../config/moment')

module.exports = {

  strToDate: (str) => {
    return (moment(str).isValid()) ? moment(str) : null
  },

  getNow: () => {
    return moment().now()
  }
  
}
