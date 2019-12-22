import React, { useState, useEffect } from "react";
import globalPersonStore from "../../common/globalstore";
import useForm from "../../common/useForm";
import { stateSchema, stateValidatorSchema } from "./formhelpers/FormHelpers";
import axios from "axios";
import "./AdminPersonCard.css";

function AdminPersoncard() {
  const [globalState, globalActions] = globalPersonStore();
  const [editMode, setEditMode] = useState(false);

  function onSubmitForm(state) {
    alert(JSON.stringify(state, null, 2));
  }

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

const MakeTextField = (field_name, field_value, display_text) => (
  <div className="column">
  <div className="infoheader">
    <label htmlFor="{field_name}">
      {display_text}:
      <input
        className="textinputbar"
        type="text"
        name="{field_name}"
        value={field_value}
        onChange={handleOnChange}
      />
    </label>
    {errors.field_name && (
      <div className="error">{errors.field_name}</div>
    )}
  </div>
</div>
);

// <div className="row"> <- might need to do that every other column?
const MakeForm = () => (
  <div className="personcard2">
  <form className="innerpersoncard" onSubmit={handleOnSubmit}>
  
  {Object.keys(stateSchema).map((k, i) => {
    const v = stateSchema[k].value;
    const d = stateSchema[k].display_text;
    return MakeTextField(k, v, d);
  })}
  <input type="submit" name="submit" disabled={disable} />
  </form>
</div>
)


//EditModeNode
  const PersonCard = props => (
    <div className="personcard">
      {editMode ? <MakeForm /> : <NotEditModeNode />} 
    </div>
  );

  return <>{globalState.person.name && <PersonCard />}</>;
}

export default AdminPersoncard;
