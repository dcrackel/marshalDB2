import React, { useState, useEffect } from "react";
import globalPersonStore from "../../common/globalstore";
import axios from "axios";
import "./AdminPersonCard.css";

function AdminPersoncard() {
  const [globalState, globalActions] = globalPersonStore();
  const [editMode, setEditMode] = useState(false);

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
    <div className="innerpersoncard personcard">
      <div className="namebox2">
        <div className="personicon"></div>
        <div className="name">
          <div className="firstnamedesc smallnametext">
            SCA first name only, please do not enter titles
          </div>
          <div className="firstname">
            <input className="editfirstname textinputbar" />
          </div>
          <div className="lastnamedesc smallnametext">
            SCA middle &amp; last name or anything after the first name
          </div>
          <div className="lastname">
            <input className="editfirstlast textinputbar" />
          </div>
        </div>
      </div>
      <div className="groupbox">
        <div className="locationicon"></div>
        <div className="groupname">
          <div className="locationname locname">
            <input className="editlocationname editlocname" />
          </div>
          <div className="region">North Oaken</div>
          <div className="locationdropdown"></div>
        </div>
      </div>
      <div className="editicon"></div>
      <div className="hiddenperson">
        <div className="personalinfobox">
          <div className="infoheader">Legal First Name</div>
          <input className="legalfirst textinputbar" />
          <div className="infoheader">Legal Last Name</div>
          <input className="legallast textinputbar" />
          <div className="infoheader">Member Number</div>
          <input className="membernumber textinputbar" />
          <div className="infoheader">Birthday</div>
          <input className="bod textinputbar" />
          <div className="infoheader">Phone Number</div>
          <input className="phonenum textinputbar" />
          <div className="infoheader">Email Address</div>
          <input className="email textinputbar" />
          <div className="infoheader">Password</div>
          <input className="hpassword textinputbar" type="password" />
        </div>
        <div className="addressinfobox">
          <div className="infoheader">Street Address 1</div>
          <input className="address1 textinputbar" />
          <div className="infoheader">Street Address 2</div>
          <input className="address2 textinputbar" />
          <div className="infoheader">City</div>
          <input className="city textinputbar" />
          <div className="infoheader">State</div>
          <input className="state textinputbar" />
          <div className="infoheader">Zip Code</div>
          <input className="zip textinputbar" />
          <div className="infoheader">Blue Card Exp Date</div>
          <input className="pie textinputbar" />
          <div className="infoheader">Confirm Password</div>
          <input className="hconfirmpassword textinputbar" />
          <div className="trashicon" onclick="removePerson();"></div>
        </div>
      </div>
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
