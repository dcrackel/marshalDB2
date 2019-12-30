import React, { useState, useEffect, useRef } from "react";
import globalPersonStore from "../../common/globalstore";
import useForm from "../../common/usePersonForm";
//import { stateSchema, stateValidatorSchema } from "./formhelpers/FormHelpers";
import axios from "axios";
import "./AdminPersonCard.css";

function AdminPersoncard(inputRef) {
  const [globalState, globalActions] = globalPersonStore();
  const [editMode, setEditMode] = useState(false);
  const input = React.createRef();

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
  } = useForm({
    initialValues: {
      sca_first_name: "Vencent",
      sca_last_name: "Vencent",
      legal_first_name: "",
      legal_last_name: "",
      branch: "",
      email: "",
      membership_num: "",
      membership_exp: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip_code: "",
      phone_num: "",
      date_of_birth: "",
    },
    onSubmit(values, errors) {
      //alert(JSON.stringify({ values, errors }, null, 2));
      alert(JSON.stringify({ values }, null, 2));
    },
    validate(values) {
      const errors = {};
      if (values.name === "") {
        errors.name = "Please enter a name";
      }
      console.log("Validated! " + errors.name);
      return errors;
    }
  });

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
      <form className="innerpersoncard" onSubmit={handleSubmit}>
        <div className="row">
          <div className="column">
            <div className="infoheader">
              <label htmlFor="sca_first_name">
                SCA First Name:
                <input
                  className="textinputbar"
                  type="text"
                  name="sca_first_name"
                  defaultValue={values.sca_first_name}
                  ref={input}
                  onBlur={handleBlur}
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
                  defaultValue={values.sca_last_name}
                  ref={input}
                  onBlur={handleBlur}
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
                  defaultValue={values.legal_first_name}
                  ref={input}
                  onBlur={handleBlur}
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
                  defaultValue={values.legal_last_name}
                  ref={input}
                  onBlur={handleBlur}
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
                  defaultValue={values.branch}
                  ref={input}
                  onBlur={handleBlur}
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
                  defaultValue={values.email}
                  ref={input}
                  onBlur={handleBlur}
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
                  defaultValue={values.membership_num}
                  ref={input}
                  onBlur={handleBlur}
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
                  defaultValue={values.membership_exp}
                  ref={input}
                  onBlur={handleBlur}
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
                  defaultValue={values.address1}
                  ref={input}
                  onBlur={handleBlur}
                />
              </label>
              {errors.address1 && (
                <div className="error">{errors.address1}</div>
              )}
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
                  defaultValue={values.address2}
                  ref={input}
                  onBlur={handleBlur}
                />
              </label>
              {errors.address2 && (
                <div className="error">{errors.address2}</div>
              )}
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
                  defaultValue={values.city}
                  ref={input}
                  onBlur={handleBlur}
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
                  defaultValue={values.state}
                  ref={input}
                  onBlur={handleBlur}
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
                Zip Code:{" "}
                {errors.zip_code && (
                  <span className="error">{errors.zip_code}</span>
                )}
                <input
                  className="textinputbar"
                  type="text"
                  name="zip_code"
                  defaultValue={values.zip_code}
                  ref={input}
                  onBlur={handleBlur}
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
                  defaultValue={values.phone_num}
                  ref={input}
                  onBlur={handleBlur}
                />
              </label>
              {errors.phone_num && (
                <div className="error">{errors.phone_num}</div>
              )}
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
                  defaultValue={values.date_of_birth}
                  ref={input}
                  onBlur={handleBlur}
                />
              </label>
              {errors.date_of_birth && (
                <p className="error">{errors.date_of_birth}</p>
              )}
            </div>
          </div>
        </div>
        {/* <input type="submit" name="submit" disabled={disable} /> */}
      </form>
    </div>
  );

  const PersonCard = props => (
    <div className="personcard">
      {/* {editMode ? <EditModeNode /> : <NotEditModeNode />} */}
      <EditModeNode />
    </div>
  );

  return <>{globalState.person.name && <PersonCard />}</>;
}

export default AdminPersoncard;
