import React, { useState, useEffect } from "react";
import globalPersonStore from "../../common/globalstore";
import useForm from "../../common/useForm";
//import { stateSchema, stateValidatorSchema } from "./formhelpers/FormHelpers";
import axios from "axios";
import "./AdminPersonCard.css";

function AdminPersoncard() {
  const [globalState, globalActions] = globalPersonStore();
  const [editMode, setEditMode] = useState(false);

  function onSubmitForm(state) {
    alert(JSON.stringify(state, null, 2));
  }

  const stateValidatorSchema = {
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

  const stateSchema = {
    sca_first_name: { value: "Vincent", error: "" },
    sca_last_name: { value: "", error: "" },
    legal_first_name: { value: "Vincent", error: "" },
    legal_last_name: { value: "", error: "" },
    branch: { value: "", error: "" },
    email: { value: "", error: "" },
    membership_num: { value: "", error: "" },
    membership_exp: { value: "", error: "" },
    address1: { value: "", error: "" },
    address2: { value: "", error: "" },
    city: { value: "", error: "" },
    state: { value: "", error: "" },
    zip_code: { value: "", error: "" },
    phone_num: { value: "", error: "" },
    date_of_birth: { value: "", error: "" }
  };

  const { values, errors, handleOnChange, handleOnSubmit, disable } = useForm(
    stateSchema,
    stateValidatorSchema,
    onSubmitForm
  );

  const {
    sca_first_name,
    sca_last_name,
    legal_first_name,
    legal_last_name,
    branch,
    email,
    membership_num,
    membership_exp,
    address1,
    address2,
    city,
    state,
    zip_code,
    phone_num,
    date_of_birth
  } = values;

  useEffect(() => {}, []);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const seperateName = (inStr, pos) => {
    let namePart = inStr.split(" ");
    return namePart[pos];
  };

  const BranchNode = props => (
    <div id="groupbox" className="groupbox">
      <div id="locationicon" />
      <div id="groupname">
        <div id="locationname" className="locname" branchid="105">
          <>{globalState.person.branch}</>
        </div>
        <div id="region">
          <>{globalState.person.region}</>
        </div>
      </div>
    </div>
  );

  const EditNode = props => (
    <div className="editicon" onClick={toggleEditMode}></div>
  );

  const NotEditModeNode = props => (
    <div className="innerpersoncard personcard" pid="1852">
      <div className="namebox">
        <div className="personicon"></div>
        <div id="name">
          <div id="firstname">{seperateName(globalState.person.name, 0)}</div>
          <div id="lastname">{seperateName(globalState.person.name, 1)}</div>
        </div>
      </div>
      <BranchNode />
      <EditNode />
    </div>
  );

  const EditModeNode = props => (
    <div className="personcard2">
      <form className="innerpersoncard" onSubmit={handleOnSubmit}>
        <div className="row">
          <div className="column">
            <div className="infoheader">
              <label htmlFor="sca_first_name">
                SCA First Name:
                <input
                  className="textinputbar"
                  type="text"
                  name="sca_first_name"
                  value={sca_first_name}
                  onChange={handleOnChange}
                />
              </label>
              {errors.sca_first_name && (
                <div className="error">{errors.sca_first_name}</div>
              )}
            </div>
          </div>
          <div className="column">
            <div className="infoheader">
              <label htmlFor="sca_last_name">
                SCA Last Name:
                <input
                  className="textinputbar"
                  type="text"
                  name="sca_last_name"
                  value={sca_last_name}
                  onChange={handleOnChange}
                />
              </label>
              {errors.sca_last_name && (
                <div className="error">{errors.sca_last_name}</div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="infoheader">
              <label htmlFor="legal_first_name">
                Legal First Name:
                <input
                  className="textinputbar"
                  type="text"
                  name="legal_first_name"
                  value={legal_first_name}
                  onChange={handleOnChange}
                />
              </label>
              {errors.legal_first_name && (
                <div className="error">{errors.legal_first_name}</div>
              )}
            </div>
          </div>
          <div className="column">
            <div className="infoheader">
              <label htmlFor="legal_last_name">
                Legal Last name:
                <input
                  className="textinputbar"
                  type="text"
                  name="legal_last_name"
                  value={legal_last_name}
                  onChange={handleOnChange}
                />
              </label>
              {errors.legal_last_name && (
                <div className="error">{errors.legal_last_name}</div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="infoheader">
              <label htmlFor="branch">
                Branch:
                <input
                  className="textinputbar"
                  type="text"
                  name="branch"
                  value={branch}
                  onChange={handleOnChange}
                />
              </label>
              {errors.branch && <div className="error">{errors.branch}</div>}
            </div>
          </div>
          <div className="column">
            <div className="infoheader">
              <label htmlFor="email">
                Email:
                <input
                  className="textinputbar"
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                />
              </label>
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="infoheader">
              <label htmlFor="membership_num">
                SCA Membership Number:
                <input
                  className="textinputbar"
                  type="text"
                  name="membership_num"
                  value={membership_num}
                  onChange={handleOnChange}
                />
              </label>
              {errors.membership_num && (
                <div className="error">{errors.membership_num}</div>
              )}
            </div>
          </div>
          <div className="column">
            <div className="infoheader">
              <label htmlFor="membership_exp">
                Membership Expire Date:
                <input
                  className="textinputbar"
                  type="text"
                  name="membership_exp"
                  value={membership_exp}
                  onChange={handleOnChange}
                />
              </label>
              {errors.membership_exp && (
                <div className="error">{errors.membership_exp}</div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="infoheader">
              <label htmlFor="address1">
                Address Line 1:
                <input
                  className="textinputbar"
                  type="text"
                  name="address1"
                  value={address1}
                  onChange={handleOnChange}
                />
              </label>
              {errors.address1 && <div className="error">{errors.address1}</div>}
            </div>
          </div>
          <div className="column">
            <div className="infoheader">
              <label htmlFor="address2">
                Address Line 2:
                <input
                  className="textinputbar"
                  type="text"
                  name="address2"
                  value={address2}
                  onChange={handleOnChange}
                />
              </label>
              {errors.address2 && <div className="error">{errors.address2}</div>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="infoheader">
              <label htmlFor="city">
                City:
                <input
                  className="textinputbar"
                  type="text"
                  name="city"
                  value={city}
                  onChange={handleOnChange}
                />
              </label>
              {errors.city && <div className="error">{errors.city}</div>}
            </div>
          </div>
          <div className="column">
            <div className="infoheader">
              <label htmlFor="state">
                State:
                <input
                  className="textinputbar"
                  type="text"
                  name="state"
                  value={state}
                  onChange={handleOnChange}
                />
              </label>
              {errors.state && <div className="error">{errors.state}</div>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="infoheader">
              <label htmlFor="zip_code">
                Zip Code: {errors.zip_code && <span className="error">{errors.zip_code}</span>}
                <input
                  className="textinputbar"
                  type="text"
                  name="zip_code"
                  value={zip_code}
                  onChange={handleOnChange}
                />
              </label>
            </div>
          </div>
          <div className="column">
            <div className="infoheader">
              <label htmlFor="phone_num">
                Phone Number:
                <input
                  className="textinputbar"
                  type="text"
                  name="phone_num"
                  value={phone_num}
                  onChange={handleOnChange}
                />
              </label>
              {errors.phone_num && <div className="error">{errors.phone_num}</div>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="infoheader">
              <label htmlFor="date_of_birth">
                Date of Birth:
                <input
                  className="textinputbar"
                  type="text"
                  name="date_of_birth"
                  value={date_of_birth}
                  onChange={handleOnChange}
                />
              </label>
              {errors.date_of_birth && (
                <p className="error">{errors.date_of_birth}</p>
              )}
            </div>
          </div>
        </div>
        <input type="submit" name="submit" disabled={disable} />
      </form>
    </div>
  );

  const PersonCard = props => (
    <div className="personcard">
      {editMode ? <EditModeNode /> : <NotEditModeNode />}
    </div>
  );

  return <>{globalState.person.name && <PersonCard />}</>;
}

export default AdminPersoncard;
