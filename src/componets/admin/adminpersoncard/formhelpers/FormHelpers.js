// const stateSchema = {
//   sca_first_name: { value: "Vincent", error: "" },
//   sca_last_name: { value: "", error: "" },
//   legal_first_name: { value: "Vincent", error: "" },
//   legal_last_name: { value: "", error: "" },
//   branch: { value: "", error: "" },
//   email: { value: "", error: "" },
//   membership_num: { value: "", error: "" },
//   membership_exp: { value: "", error: "" },
//   address1: { value: "", error: "" },
//   address2: { value: "", error: "" },
//   city: { value: "", error: "" },
//   state: { value: "", error: "" },
//   zip_code: { value: "", error: "" },
//   phone_num: { value: "", error: "" },
//   date_of_birth: { value: "", error: "" }
// };

// const stateValidatorSchema = {
//   sca_first_name: {
//     required: true,
//     validator: {
//       func: value => /^[a-zA-Z]+$/.test(value),
//       error: "Invalid Name Format. (no special charaters or numbers)"
//     }
//   },
//   sca_last_name: {
//     required: true,
//     validator: {
//       func: value => /^[a-zA-Z]+$/.test(value),
//       error: "Invalid Name Format. (no special charaters or numbers)"
//     }
//   },
//   legal_first_name: {
//     required: true,
//     validator: {
//       func: value => /^[a-zA-Z]+$/.test(value),
//       error: "Invalid Name Format. (no special charaters or numbers)"
//     }
//   },
//   legal_last_name: {
//     required: true,
//     validator: {
//       func: value => /^[a-zA-Z]+$/.test(value),
//       error: "Invalid Name Format. (no special charaters or numbers)"
//     }
//   },
//   branch: {
//     required: true,
//     validator: {
//       func: value => /^[\s\S]+$/.test(value),
//       error: "Invalid first name format."
//     }
//   },
//   email: {
//     required: true,
//     validator: {
//       func: value =>
//         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//           value
//         ),
//       error: "Invalid Email format."
//     }
//   },
//   membership_num: {
//     required: true,
//     validator: {
//       func: value => /^\d+$/.test(value),
//       error: "Invalid first name format."
//     }
//   },
//   membership_exp: {
//     required: true,
//     validator: {
//       func: value =>
//         /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(
//           value
//         ),
//       error: "Invalid Date format DD-MM-YYYY"
//     }
//   },
//   address1: {
//     required: true,
//     validator: {
//       func: value => /^\w+$/.test(value),
//       error: "Invalid Address format."
//     }
//   },
//   address2: {
//     required: false,
//     validator: {
//       func: value => /^\w+$/.test(value),
//       error: "Invalid Address format."
//     }
//   },
//   city: {
//     required: true,
//     validator: {
//       func: value => /^[a-zA-Z]+$/.test(value),
//       error: "Invalid City format."
//     }
//   },
//   state: {
//     required: true,
//     validator: {
//       func: value => /^[a-zA-Z]+$/.test(value),
//       error: "Invalid State format."
//     }
//   },
//   zip_code: {
//     required: true,
//     validator: {
//       func: value => /^\d+$/.test(value),
//       error: "Invalid Zip Code format."
//     }
//   },
//   phone_num: {
//     required: true,
//     validator: {
//       func: value => /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value),
//       error: "Invalid Phone Number Format. Example Format: (555) 555-5555"
//     }
//   },
//   date_of_birth: {
//     required: true,
//     validator: {
//       func: value => /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(value),
//       error: "Invalid date format. Example Format: MM-DD-YYYYY"
//     }
//   }
// };
