const Validator = require('validator')

const validate = (request, rules, messages = {}) => {
  const errors = { hasError: false, errors: [], messages: [] }

  for (let [key, rulesSpe] of Object.entries(rules)) {
    errors['errors'][key] = {}
    if (Object.hasOwnProperty.call(request, key)) {
      for (const [keyRule, value] of Object.entries(rulesSpe)) {
        if(keyRule !== 'required') {
          const check = (Validator[keyRule](request[key], value))
          errors['errors'][key][keyRule] = check
          if (!check) {
            errors.hasError = true
            if (messages?.[key]?.[keyRule])
              errors.messages.push(messages?.[key]?.[keyRule])
          }
        }
      }
    } else {
      // check if required rule && not present in request
      if (Object.keys(rulesSpe).includes('required') && rulesSpe.required) {
        errors.hasError = true
        errors['errors'][key]['required'] = false
      }
        
    }
  }
  return errors
}

module.exports = { validate }
