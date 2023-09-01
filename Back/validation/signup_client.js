const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.userName = !isEmpty(data.userName) ? data.userName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";


    // username checks
    if (Validator.isEmpty(data.userName)) {
        errors.userName = "userName is required";
    }

    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email Client field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email Client is invalid";
    }

    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "password Client field is required";
    }


    return {
        errors,
        isValid: isEmpty(errors)
      };
}