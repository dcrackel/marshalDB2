import React, { useState, useEffect } from "react";
import globalPersonStore from "../../common/globalstore";
import axios from "axios";
import "./Personcard.css";

// {globalState.person}
function Personcard() {
  const [globalState, globalActions] = globalPersonStore();

  useEffect(() => {

  }, []);

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

  const PersonCard = props => (
    <div className="personcard">
      <div id="innerpersoncard" className="personcard" pid="1852">
        <div id="namebox">
          <div id="personicon"></div>
          <div id="name">
            <div id="firstname">{seperateName(globalState.person.name, 0)}</div>
            <div id="lastname">{seperateName(globalState.person.name, 1)}</div>
          </div>
        </div>
        <BranchNode />
        <div id="printericon"></div>
      </div>
    </div>
  );

  return <>{globalState.person.name && <PersonCard />}</>;
}

export default Personcard;
