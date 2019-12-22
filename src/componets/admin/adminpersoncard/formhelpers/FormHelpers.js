export const stateSchema = {
  sca_first_name: { value: "Vincent", error: "", display_text: "SCA First Name" },
  sca_last_name: { value: "", error: "", display_text: "SCA Last Name" },
  legal_first_name: { value: "Vincent", error: "", display_text: "Legal First Name"  },
  legal_last_name: { value: "", error: "", display_text: "Legal Last Name"  },
  branch: { value: "", error: "", display_text: "Local Branch"  },
  email: { value: "", error: "", display_text: "Email"  },
  membership_num: { value: "", error: "", display_text: "Membership Number"  },
  membership_exp: { value: "", error: "", display_text: "Member Expire"  },
  address1: { value: "", error: "", display_text: "Address 1"  },
  address2: { value: "", error: "", display_text: "Address 2"  },
  city: { value: "", error: "", display_text: "City"  },
  state: { value: "", error: "", display_text: "State"  },
  zip_code: { value: "", error: "", display_text: "Zip Code"  },
  phone_num: { value: "", error: "", display_text: "Phone Number"  },
  date_of_birth: { value: "", error: "", display_text: "Date of Birth"  }
};

export const stateValidatorSchema = {
    sca_first_name: {
      required: true,
      validator: {
        func: value => /^[a-zA-Z]+$/.test(value),
        error: "Invalid Name Format. (no special charaters or numbers)"
      }
    },
    sca_last_name: {
      required: true,
      validator: {
        func: value => /^[a-zA-Z]+$/.test(value),
        error: "Invalid Name Format. (no special charaters or numbers)"
      }
    },
    legal_first_name: {
      required: true,
      validator: {
        func: value => /^[a-zA-Z]+$/.test(value),
        error: "Invalid Name Format. (no special charaters or numbers)"
      }
    },
    legal_last_name: {
      required: true,
      validator: {
        func: value => /^[a-zA-Z]+$/.test(value),
        error: "Invalid Name Format. (no special charaters or numbers)"
      }
    },
    branch: {
      required: true,
      validator: {
        func: value => /^[\s\S]+$/.test(value),
        error: "Invalid first name format."
      }
    },
    email: {
      required: true,
      validator: {
        func: value =>
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          ),
        error: "Invalid Email format."
      }
    },
    membership_num: {
      required: true,
      validator: {
        func: value => /^\d+$/.test(value),
        error: "Invalid first name format."
      }
    },
    membership_exp: {
      required: true,
      validator: {
        func: value =>
          /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(
            value
          ),
        error: "Invalid Date format DD-MM-YYYY"
      }
    },
    address1: {
      required: true,
      validator: {
        func: value => /^\w+$/.test(value),
        error: "Invalid Address format."
      }
    },
    address2: {
      required: false,
      validator: {
        func: value => /^\w+$/.test(value),
        error: "Invalid Address format."
      }
    },
    city: {
      required: true,
      validator: {
        func: value => /^[a-zA-Z]+$/.test(value),
        error: "Invalid City format."
      }
    },
    state: {
      required: true,
      validator: {
        func: value => /^[a-zA-Z]+$/.test(value),
        error: "Invalid State format."
      }
    },
    zip_code: {
      required: true,
      validator: {
        func: value => /^\d+$/.test(value),
        error: "Invalid Zip Code format."
      }
    },
    phone_num: {
      required: true,
      validator: {
        func: value =>
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
            value
          ),
        error: "Invalid Phone Number Format. Example Format: (555) 555-5555"
      }
    },
    date_of_birth: {
      required: true,
      validator: {
        func: value =>
          /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(
            value
          ),
        error: "Invalid date format. Example Format: MM-DD-YYYYY"
      }
    }
  };
